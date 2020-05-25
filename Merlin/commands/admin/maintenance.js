const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (message.author.id !== client.config.zoumi){
        if (client.config.maintenance.get !== true){
            return message.channel.send(`<@${message.author.id}>, le mode \`maintenance\` est désormait activer !`);
        }else{
            client.config.maintenance.set(false);
            return message.channel.send(`<@${message.author.id}>, le mode \`maintenance\` est désormait désactiver !`)
        }
    }

};

module.exports.help = {
    name: "maintenance",
    aliases: ["mtn"]
};