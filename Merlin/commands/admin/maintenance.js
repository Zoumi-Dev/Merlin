const Discord = require('discord.js');
const fs = require('fs');
const config = require('../../config.json');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (message.author.id === client.config.zoumi){
        if (client.config.maintenance === false){
            fs.writeFile(`../../config.json`, config.maintenance = true, (err) => {
                if (err) return console.log(err);
            });
            return message.channel.send(`<@${message.author.id}>, le mode \`maintenance\` est désormait activer !`);
        }else{
            fs.writeFile(`../../config.json`, config.maintenance = false, function (err) {
                if (err) return console.log(err);
            });
            return message.channel.send(`<@${message.author.id}>, le mode \`maintenance\` est désormait désactiver !`);
        }
    }

};

module.exports.help = {
    name: "maintenance",
    aliases: ["mtn"]
};