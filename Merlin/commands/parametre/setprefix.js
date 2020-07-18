const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (client.config.ownerID.includes(message.author.id)){
        let prefixes = JSON.parse(fs.readFileSync(`././serveurs/${message.guild.name}.json`, 'utf8'));

        prefixes["prefix"] = args[0];

        fs.writeFileSync(`././serveurs/${message.guild.name}.json`, JSON.stringify(prefixes), (err) => {
            if (err) return message.channel.send(err.message);
        })

        let pref = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField("> :white_check_mark: | Succès", `> Le prefix est désormait \`${args[0]}\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(pref);
    }

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        let noperm = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv.prefix}setprefix [nouveau prefix]\nPermission requise: ADMINISTRATOR\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noperm);
    }

    if (!args[0]){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv.prefix}setprefix [nouveau prefix]\nPermission requise: ADMINISTRATOR\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    let prefixes = JSON.parse(fs.readFileSync(`././serveurs/${message.guild.name}.json`, 'utf8'));

    prefixes["prefix"] = args[0];

    fs.writeFileSync(`././serveurs/${message.guild.name}.json`, JSON.stringify(prefixes), (err) => {
        if (err) return message.channel.send(err.message);
    })

    let pref = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("PURPLE")
        .addField("> :white_check_mark: | Succès", `> Le prefix est désormait \`${args[0]}\``)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(pref);
};

module.exports.help = {
    name: "setprefix",
    categories: "parametre",
};