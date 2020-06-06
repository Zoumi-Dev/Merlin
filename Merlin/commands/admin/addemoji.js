const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("MANAGE_EMOJIS")) {
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}addemoji [lien] [nom]\nPermission requis: MANAGE_EMOJIS\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    if (args < 1){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}addemoji [lien] [nom]\nPermission requis: MANAGE_EMOJIS\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    if (message.guild.emojis.cache.find(e => e.name === args[1])){
        let exist = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor('#FF00FF')
            .addField("> :x: | Erreur", `L'émoji \`${args[1]}\` existe déjà !`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(exist);
    };

    await message.guild.emojis.create(args[0], args[1]);

    let successEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField("> :white_check_mark: | Succès", `L'émoji \`${args[1]}\` à été ajouter avec succès ! ${message.guild.emojis.cache.find(e => e.name === args[1])}`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(successEmbed);

};

module.exports.help = {
    name: "addemoji",
    categories: "admin",
    description: "Permet d'ajouter un emoji.",
    usage: `=addemoji [lien] [nom]`,
};