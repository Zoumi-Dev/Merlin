const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete().catch();

    let say = args.join(" ");

    if (!args[0]) {
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}say [message]\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    return message.channel.send(say, {
        disableMentions: "everyone",
        allowedMentions: {
            roles: false,
            users: false,
        }
    });
};

module.exports.help = {
    name: "say",
    aliases: ["dir"],
    categories: "fun",
};