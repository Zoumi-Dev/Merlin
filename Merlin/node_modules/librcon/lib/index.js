const net = require("net");
const Packet = {
    AUTH: 0x03,
    COMMAND: 0x02,
    RESPONSE_AUTH: 0x02,
    RESPONSE_COMMAND: 0x00
};

class LibRcon {

    static async send(command, password, host, port = 19132, timeout = 5000) {
        return new Promise(async(resolve, reject) => {
            try {
                let client = net.createConnection(port, host);
                client.setTimeout(timeout);

                client.once("timeout", () => {
                    client.end();
                    reject(new Error("Connection timed out"));
                });

                client.on("data", (buff) => {
                    let length = buff.readInt32LE(0);
                    if (!length) {
                        reject(new Error("Got an empty response from the server"));
                    }

                    let id = buff.readInt32LE(4);
                    let type = buff.readInt32LE(8);

                    if (id === -1) {
                        reject(new Error("Password is incorrect"));
                    }

                    if (type === Packet.RESPONSE_AUTH) {
                        let cmd = this.createPacket(command, Packet.COMMAND);
                        client.write(cmd);
                    } else if (type === Packet.RESPONSE_COMMAND) {
                        let str = buff.toString("utf-8", 12);

                        client.removeAllListeners();
                        resolve(str);
                    }
                });

                client.once("error", (err) => {
                    client.end();
                    reject(err);
                });

                client.on("connect", async() => {
                    let auth = this.createPacket(password, Packet.AUTH);

                    client.write(auth, port, host);
                });
            } catch (ex) {
                reject(ex);
            }
        });
    }

    static createPacket(payload, type) {
        let id = this.generateId();
        let bytesLen = Buffer.byteLength(payload);
        let buffer = Buffer.allocUnsafe(14 + bytesLen); // int32 + int32 + int32 + byte array

        buffer.writeInt32LE(bytesLen + 10, 0);
        buffer.writeInt32LE(id, 4);
        buffer.writeInt32LE(type, 8);
        buffer.write(payload, 12);
        buffer.writeUInt8([0x00, 0x00], bytesLen + 12); // last offset  + length of the byte array and wtf why 2 empty bytes ??????

        return buffer;
    }

    static generateId() {
        return Math.trunc(Math.random() * (0x98967F - 0xF4240) + 0xF4240); // Stolen from modern-rcon (Yes, I was lazy to create an ID generator, don't judge me please lmao).
    }
}

module.exports = LibRcon;
