const Discord = require('discord.js');
const fs = require('fs');

module.exports = async (client, message) => {
    const channel = message.guild.channels.cache.get("712782027883020330");

    client.serv = JSON.parse(fs.readFileSync(`././serveurs/${message.guild.name}.json`, 'utf8'));

    let logsChannel = message.guild.channels.cache.find(ch => ch.name === client.serv["logs-channel"]) || message.guild.channels.cache.find(ch => ch.id === client.serv["logs-channel"]);

    if (logsChannel){
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription(`> \`${message.user.username} à quitter le serveur discord !\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return logsChannel.send(logs);
    }
    if (message.guild.id === client.config.supportServer){
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription(`> \`${message.user.username} à quitter le serveur discord !\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :cry: | Aurevoir", `<@${message.user.id}>, nous à quitter ! Nous espérons sont retour...`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return channel.send(embed) && logsChannel.send(logs);
    }
};