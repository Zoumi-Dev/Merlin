const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!args[0] === usr) {
        let noUsr = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Erreur", "`Cette utilisateur n'existe pas !`")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(noUsr);
    }

    if (!args[0]) {
        let infos = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :bust_in_silhouette: | Nom d'utilisateur", `• ${message.author.username}`, true)
            .addField("> :mag: | Compte créer le", `• ${moment.utc(message.author.createdAt).format("DD/MM/YYYY à hh:mm A")}`, true)
            .addField("> A rejoint le", `${moment.utc(message.guild.member.joinedAt).format("DD/MM/YYYY à hh:mm A")}`)
            .setThumbnail(message.author.avatarURL())
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(infos);
    } else {
        let infos = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :bust_in_silhouette: | Nom d'utilisateur", `• ${usr}`, true)
            .addField("> :mag: | Compte créer le", `• ${moment.utc(usr.user.createdAt).format("DD/MM/YYYY à hh:mm A")}`, true)
            .addField("> A rejoint le", `${moment.utc(message.guild.member.joinedAt).format("DD/MM/YYYY à hh:mm A")}`)
            .setThumbnail(usr.user.avatarURL())
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(infos);
    }

};

module.exports.help = {
    name: "infos",
    aliases: ["i"],
};