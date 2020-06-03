const Discord = require('discord.js');
const moment = require('moment');
const fs = require('fs');
const img = new Discord.MessageAttachment('././img/merlin_help.gif');
const exec = require('child_process').exec;

module.exports.run = async (client, message, args) => {

    function clean(text) {
        if (typeof text === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    }

    if (!client.config.ownerID.includes(message.author.id)){
        return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission d'utiliser cette commande !`);
    }

    const code = args.join(' ');
    const result = new Promise((resolve, reject) => resolve(eval(code))).catch(e => {
        return message.channel.send(e.message, {code: "js"});
    });
    return result.then(output => {
        if (typeof output !== "string"){
            output = require('util').inspect(output);
            if (output.length >= 2000){
                return;
            }
        }
        if (output.includes(client.config.token)){
            return message.channel.send("euuuuuuuhhhhhhhh NOPE", {code: "js"}).then(r => r.react(client.emojis.cache.find(e => e.id === client.emo.pleure)));
        }
        message.channel.send(output, {code: "js"});
    });

};

module.exports.help = {
    name: "eval",
};