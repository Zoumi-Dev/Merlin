const Discord = require('discord.js');
const moment = require('moment');

exports.run = async (client, message, args) => {

    message.delete();

    let botEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .setThumbnail(client.user.avatarURL())
        .addField("> :man_technologist: | Développeur", "• Zoumi#0336", true)
        .addField(">  :book: | Librairie", "• NodeJs\n• DiscordJs", true)
        .addField("> :wrench: | Version", "• 1.0.0", true)
        .addField("> :newspaper2: | Informations", `Je suis dans \`${client.guilds.cache.size}\` serveur\nUn total de \`soon\` membre(s) sur tous les serveurs ou je suis !`)
        .addField("> :question: | Help", "• mon discord: [[click]](https://discord.gg/7PQUHTr)\n• m'inviter: [[click]](https://discord.com/api/oauth2/authorize?client_id=712318774644310057&permissions=8&scope=bot)")
        .setTimestamp()
        .setFooter("Merlin | Powered by Zoumi#0336");
    return message.channel.send(botEmbed);
};