const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    message.delete();

    let msg = args.slice(1).join(" ");

    if (args < 1){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv.prefix}setjoin [channel id ou nom] [message]\nPermission requise: ADMINISTRATOR\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    if (!msg){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv.prefix}setjoin [channel id ou nom] [message]\nPermission requise: ADMINISTRATOR\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    let channelJoin = message.guild.channels.cache.find(ch => ch.name === args[0]) || message.guild.channels.cache.find(ch => ch.id === args[0]);

    if (!channelJoin){
        let nochannel = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField(":x: | Erreur", `Le channel \`${args[0]}\` n'existe pas !`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(nochannel);
    }

    let config = JSON.parse(fs.readFileSync(`././serveurs/${message.guild.name}.json`, 'utf8'));

    config["guildMemberAdd"] = args[0];
    config["guildMemberAddMessage"] = msg;

    fs.writeFileSync(`././serveurs/${message.guild.name}.json`, JSON.stringify(config), (err) => {
        if (err) return message.channel.send(err.message);
    });

    let succes = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("PURPLE")
        .addField("> :white_check_mark: | Succès", "Le channel de bienvenue à bien été définis !")
        .setTimestamp()
        .setFooter(client.config.footer);
    return channelJoin.send(succes);

};

module.exports.help = {
    name: "setjoin",
    categories: "parametre",
    description: "Permet de définir le channel de bienvenue ainsi que définir un message de bienvenue.",
    usage: "=setjoin [channel id ou nom] [message]",
};