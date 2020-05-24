const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    message.delete();

    let serverEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .setThumbnail(client.guilds.cache.get(message.guild.id).iconURL({dynamic: true}))
        .addField("> :crown: | Propriétaire", `• <@${message.guild.owner.id}>`, true)
        .addField("> :mag: | Serveur créer le", `• ${moment.utc(message.guild.createdAt).format("DD/MM/YYYY à HH:mm")}`, true)
        .addField("> :busts_in_silhouette: | Membre(s) total", `• ${message.guild.memberCount}`, true)
        .addField("> Robot(s)", `• `)
        .addField("> :closed_book: | Channel(s)", `• ${message.guild.channels.cache.size}`, true)
        .setTimestamp()
        .setFooter("Merlin | Powered by Zoumi#0336");
    return message.channel.send(serverEmbed);
};

module.exports.help = {
    name: "server-infos",
};