const crypto = require("crypto");
const dgram = require("dgram");

class LibQuery {

    static async query(host, port = 19132, timeout = 5000) {
        return new Promise(async(resolve, reject) => {
            try {
                let sessionId = this.generateSessionId();
                let client = dgram.createSocket("udp4");
                let challenge = await this.generateChallenge(client, sessionId, host, port, timeout);
                let buffer = Buffer.alloc(15);

                buffer.writeUInt16BE(0xFEFD, 0);
                buffer.writeUInt8(0, 2);
                buffer.writeInt32BE(sessionId, 3);
                buffer.writeInt32BE(challenge, 7);
                buffer.writeInt32BE(0x00, 11);

                client.on("message", (data, info) => {
                    data = data.toString("utf-8", 11).split("\x00\x01player_\x00\x00");
                    let players = data[1].split("\u0000").slice(0, -2) || null;
                    data = data[0].split("\0");
                    
                    resolve({
                        host: data[23],
                        port: data[25],
                        motd: this.cleanMotd(data[3]),
                        gametype: data[7].toLowerCase(),
                        version: data[9] || null,
                        software: data[11] || null,
                        plugins: data[13] || null,
                        map: data[15] || null,
                        online: data[17] || null,
                        max: data[19] || null,
                        players
                    });
                });
                
                setTimeout(() => {
                	client.removeAllListeners();
                	reject(new Error("Query timed out"));
                }, timeout);

                client.send(buffer, port, host, (err) => {
                    if (err) {
                        reject(err);
                    }
                });
            } catch (ex) {
                reject(ex);
            }
        });
    }

    static generateSessionId() {
        return crypto.randomBytes(4);
    }

    static async generateChallenge(client, sessionId, host, port, timeout) {
        return new Promise((resolve, reject) => {
            let buffer = Buffer.alloc(7);

            buffer.writeUInt16BE(0xFEFD, 0);
            buffer.writeUInt8(9, 2);
            buffer.writeInt32BE(sessionId, 3);
            buffer.write("", 7);

            client.on("message", (data, info) => {
            	client.removeAllListeners();
                resolve(parseInt(data.toString('utf-8', 5)));
            });
            
            setTimeout(() => {
            	client.removeAllListeners();
            	reject(new Error("Challenge recovery time out"));
            }, timeout);
            
            client.send(buffer, port, host, (err) => {
                if (err) {
                    reject(err);
                }
            });
        });
    }

    static cleanMotd(text) {
        return text.replace(/§.{0,1}/g, "");
    }
}

module.exports = LibQuery;
