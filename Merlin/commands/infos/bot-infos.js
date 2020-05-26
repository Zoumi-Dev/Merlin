const Discord = require('discord.js');
const moment = require('moment');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    message.delete();

    let botEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("BLUE")
        .setThumbnail(client.user.avatarURL())
        .addField("> :man_technologist: | Développeur", "✦ Zoumi#0336\n✦ JOrDan#5128", true)
        .addField(">  :book: | Librairie", "✦ NodeJs\n✦ DiscordJs", true)
        .addField("> :wrench: | Version", "✦ 1.0.0", true)
        .addField("> Hébergeur", "✦ InovaPerf")
        .addField("> Disque", `✦ ${fs.Stats.size}`)
        .addField("> :newspaper2: | Informations", `✦ Je suis dans \`${client.guilds.cache.size}\` serveurs !\n✦ Un total de \`${client.users.cache.size}\` membre(s) sur tous les serveurs ou je suis !\n✦ Je suis en ligne depuis le \`${moment.utc(client.readyAt).format("DD/MM/YYYY à hh:mm A")}\``)
        .addField("> :question: | Help", "✦ mon discord: \[[click]\](https://discord.gg/7PQUHTr)\n✦ m'inviter: \[[click]\](https://discord.com/api/oauth2/authorize?client_id=712318774644310057&permissions=8&scope=bot)")
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(botEmbed);
};

module.exports.help = {
    name: "bot-infos",
    aliases: ["bi"],
    description: "Permet d'afficher les informations du bot.",
    usage: "_bot-infos",
};