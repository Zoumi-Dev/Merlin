const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("BLUE")
        .setDescription(`> Hey <@${message.author.id}>, clique [[ici]](https://discord.com/api/oauth2/authorize?client_id=712318774644310057&permissions=8&scope=bot) si tu souhaites inviter le bot sur ton serveur discord ou clique [[ici]](https://discord.gg/7PQUHTr) si tu souhaites rejoindre le serveur help de __**Merlin**__.`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);

};

module.exports.help = {
    name: "invite",
    aliases: ["i"],
    categories: "infos",
};