const Discord = require('discord.js');
const moment = require('moment');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    message.delete();

    let botEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("BLUE")
        .setThumbnail(client.user.avatarURL())
        .addField(":man_technologist: | `Développeurs`", "✦ Zoumi#0336\n✦ JOrDan#5128", true)
        .addField(":globe_with_meridians: | `Site Web`", "https://merlin.zoumi.wtf/", true)
        .addField(":book: | `Librairie`", "✦ NodeJs\n✦ DiscordJs", true)
        .addField(":wrench: | `Version`", "✦ 1.3.1", true)
        .addField(`${client.emojis.cache.find(e => e.id === client.emo.teddy)} | \`Prefix\``, `✦ ${client.serv["prefix"]}`, true)
        .addField(`${client.emojis.cache.find(e => e.id === client.emo.pulseheberg)} | \`Hébergeur\``, "✦ PulseHeberg", true)
        .addField(":question: | `Help`", "✦ Mon discord: [[clique]](https://discord.gg/7PQUHTr)\n✦ M'inviter: \[[clique]\](https://discord.com/api/oauth2/authorize?client_id=712318774644310057&permissions=8&scope=bot)\n✦ Patreon [[clique]](https://www.patreon.com/merlin_bot)", true)
        .addField(":newspaper2: | `Informations`", `✦ Je suis dans \`${client.guilds.cache.size}\` serveurs !\n✦ Un total de \`${client.users.cache.size}\` membre(s) sur tout les serveurs où je me trouve !\n✦ Je suis en ligne depuis le \`${moment.utc(client.readyAt).format("DD/MM/YYYY à hh:mm A")}\``)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(botEmbed);
};

module.exports.help = {
    name: "bot-infos",
    aliases: ["bi"],
    categories: "infos",
    description: "Permet d'afficher les informations du bot.",
    usage: "_bot-infos",
};