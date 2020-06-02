const Discord = require('discord.js');
const fs = require('fs');
const config = require('../../config.json');

module.exports.run = async (client, message, args) => {

    message.delete();

    let reason = args.join(' ');

    if (!args[0]) {
        if (!client.config.ownerID.includes(message.author.id)) {
            if (client.config.maintenance === false) {
                fs.writeFile(`../../config.json`, config.maintenance = true, (err) => {
                    if (err) return console.log(err);
                });
                return message.channel.send(`<@${message.author.id}>, le mode \`maintenance\` est désormait activer !`);
            } else {
                fs.writeFile(`../../config.json`, config.maintenance = false, function (err) {
                    if (err) return console.log(err);
                });
                return message.channel.send(`<@${message.author.id}>, le mode \`maintenance\` est désormait désactiver !`);
            }
        }
    }else{
        if (!client.config.ownerID.includes(message.author.id)) {
            if (client.config.maintenance === false) {
                fs.writeFile(`../../config.json`, config.maintenance = true, (err) => {
                    if (err) return console.log(err);
                });
                fs.writeFile(`../../config.json`, config.maintenanceReason = args[0], (err) => {
                    if (err) return console.log(err);
                });
                return message.channel.send(`<@${message.author.id}>, le mode \`maintenance\` est désormait activer pour la raison \`${reason}\` !`);
            }
        }
    }

};

module.exports.help = {
    name: "maintenance",
    aliases: ["mtn"]
};