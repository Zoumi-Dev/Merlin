const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let helpEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .addField("> :newspaper2: | Informations", "`bot-infos`, `server-infos`, `infos`, `ping`")
        .addField("> :tada: | Fun", "`img`, `say`, `quest`, `kiss`, `hug`, `cry`, `ddos`(fake)")
        .addField("> :underage: | nsfw", "`anal`, `neko`, `hentai`, `latex`, `ass`, `hot`")
        .addField("> :man_police_officer: | Administrative", "`clear`, `ban`, `kick`")
        .addField("> :question: | Help", "Vous avez une suggestion ? Alors faite `_sugg`\nmon discord: [[click]](https://discord.gg/7PQUHTr)\nm'inviter: [[click]](https://discord.com/api/oauth2/authorize?client_id=712318774644310057&permissions=8&scope=bot)")
        .setTimestamp()
        .setFooter("Merlin | Powered by Zoumi#0336");
    return message.channel.send(helpEmbed);
};

module.exports.help = {
    name: "help",
};