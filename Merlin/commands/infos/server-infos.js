const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) {
        let serverEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .setThumbnail(client.guilds.cache.get(message.guild.id).iconURL({dynamic: true}))
            .addField("> :crown: | Propriétaire", `✦ <@${message.guild.owner.id}>`, true)
            .addField("> :mag: | Serveur créé le", `✦ ${moment.utc(message.guild.createdAt).format("DD/MM/YYYY à hh:mm A")}`, true)
            .addField("> :id: | ID du serveur", `✦ ${message.guild.id}`, true)
            .addField("> :busts_in_silhouette: | Utilisateur(s)", `✦ ${message.guild.memberCount}`, true)
            .addField("> :blond_haired_man: | Humain(s)", `✦ ${message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size}`, true)
            .addField("> :robot: | Robot(s)", `✦ ${message.guild.members.cache.filter(m => m.user.bot).size}`, true)
            .addField("> :closed_book: | Channel(s)", `✦ ${message.guild.channels.cache.filter(ch => ch.type === "text").size}`, true)
            .addField("> Catégorie(s)", `✦ ${message.guild.channels.cache.filter(ch => ch.type === 'category').size}`)
            .addField("> :speaker: | Salon(s) Vocal/aux", `✦ ${message.guild.channels.cache.filter(m => m.type === 'voice').size}`, true)
            .addField("> Rôle(s)", `${message.guild.roles.cache.map(r => `<@&${r.id}>`).join(" ").replace("@everyone", null)}`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(serverEmbed);
    }else {

    }
};

module.exports.help = {
    name: "server-infos",
    aliases: ["si"],
    categories: "infos",
    description: "Permet de voir les informations du serveur.",
    usage: "_server-infos",
};