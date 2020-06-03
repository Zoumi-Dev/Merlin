const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("BLUE")
        .setDescription(`> Hey <@${message.author.id}>, click [[ici]](https://discord.gg/7PQUHTr) si tu souhaite inviter le bot sur ton serveur discord ou click [[ici]](https://discord.com/api/oauth2/authorize?client_id=712318774644310057&permissions=8&scope=bot) si tu souhaite rejoindre le serveur help de __**Merlin**__.`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);

};

module.exports.help = {
    name: "invite",
    aliases: ["i"],
    categories: "infos",
};