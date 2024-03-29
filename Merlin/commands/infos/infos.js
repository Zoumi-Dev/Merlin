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
            .setFooter(client.config.footer);
        return message.channel.send(noUsr);
    }

    if (!args[0]) {
        let infos = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .addField("> :bust_in_silhouette: | Nom d'utilisateur/tag", `✦ ${message.author.tag}`, true)
            .addField("> :detective: | NickName", message.guild.member(message.author.id).nickname ? `✦ ${message.guild.member(message.author.id).nickname}` : `✦ Aucun`, true)
            .addField("> :id: | ID de l'utilisateur", `✦ ${message.author.id}`, true)
            .addField("> :mag: | Compte créé le", `✦ ${moment.utc(message.author.createdAt).format("DD/MM/YYYY à hh:mm A")}`, true)
            .addField("> :mag: | A rejoint le", `✦ ${moment.utc(message.guild.member(message.author.id).joinedAt).format("DD/MM/YYYY à hh:mm A")}`, true)
            .addField("> :blue_book: | Rôle(s)", `✦ ${message.guild.member(message.author.id).roles.cache.map(r => r).join(" ").replace("@everyone", "")}`)
            .setThumbnail(message.author.avatarURL({dynamic: true}))
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(infos);
    } else {
        let infos = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .addField("> :bust_in_silhouette: | Nom d'utilisateur/tag", `✦ ${usr.user.tag}`, true)
            .addField("> :detective: | NickName", message.guild.member(usr.user.id).nickname ? `✦ ${message.guild.member(usr.user.id).nickname}` : `✦ Aucun`, true)
            .addField("> :id: | ID de l'utilisateur", `✦ ${usr.user.id}`, true)
            .addField("> :mag: | Compte créé le", `✦ ${moment.utc(usr.user.createdAt).format("DD/MM/YYYY à hh:mm A")}`, true)
            .addField("> :mag: | A rejoint le", `✦ ${moment.utc(message.guild.member(usr.user.id).joinedAt).format("DD/MM/YYYY à hh:mm A")}`, true)
            .addField("> :blue_book: | Rôle(s)", `✦ ${message.guild.member(usr.user.id).roles.cache.map(r => r).join(" ").replace("@everyone", "")}`)
            .setThumbnail(usr.user.avatarURL({dynamic: true}))
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(infos);
    }

};

module.exports.help = {
    name: "infos",
    aliases: ["i"],
    categories: "infos",
    description: "Permet d'afficher les informations d'un utilisateur ou de vous.",
    usage: "_infos [utilisateur] ou _infos",
};