const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete().catch();

    let say = args.join(" ");

    if (!args[0]){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", "`Utilisation: _say [message]`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREEN")
        .addField(`> ${message.author.username} à dit`, say)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);
};

module.exports.help = {
    name: "say",
    aliases: ["dir"],
};