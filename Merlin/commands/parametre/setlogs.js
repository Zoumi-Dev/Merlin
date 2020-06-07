const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("ADMINISTRATOR")){
        let noperm = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv.prefix}checkconfig [nouveau prefix]\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noperm);
    }

    if (!args[0]){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv.prefix}setlogs [channel (id) (nom)]\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    let logsChannel = message.guild.channels.cache.find(ch => ch.name === args[0]) || message.guild.channels.cache.find(ch => ch.id === args[0]);

    if (!logsChannel){
        let nochannel = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField(":x: | Erreur", `Le channel \`${args[0]}\` n'existe pas !`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(nochannel);
    }

    let ch = JSON.parse(fs.readFileSync(`././serveurs/${message.guild.name}.json`, 'utf8'));

    ch["logs-channel"] = args[0];

    fs.writeFileSync(`././serveurs/${message.guild.name}.json`, JSON.stringify(ch), (err) => {
        if (err) return message.channel.send(err.message);
    });

    let succes = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("PURPLE")
        .addField("> :white_check_mark: | Succès", `Les logs vous seront transmit ici !`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return logsChannel.send(succes);

};

module.exports.help = {
    name: "setlogs",
    categories: "parametre",
};