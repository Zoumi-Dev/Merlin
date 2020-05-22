const Discord = require('discord.js');
const moment = require('moment');

exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!args[0]){
        let noArgs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Erreur", "`Utilisation: _infos [utilisateur]`")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(noArgs);
    }

    if (!usr){
        let noUsr = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Erreur", "`Cette utilisateur n'existe pas !`")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(noUsr);
    }

    let infos = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .addField("> :bust_in_silhouette: | Nom d'utilisateur", `• ${usr}`, true)
        .addField("> :mag: | Compte créer le", `• ${moment.utc(usr.user.createdAt).format("DD/MM/YYYY à HH:mm")}`, true)
        .addField("> A rejoint le", `${moment.utc(message.guild.member.joinedAt).format("DD/MM/YYYY à HH:mm")}`)
        .setThumbnail(usr.user.avatarURL())
        .setTimestamp()
        .setFooter("Merlin | Powered by Zoumi#0336");
    return message.channel.send(infos);

};