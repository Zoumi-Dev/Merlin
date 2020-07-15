const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    message.delete();

    let sayEmbed = args.join(' ');

    if (!sayEmbed) {
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}embed [message]\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(embed);
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`)
        .setDescription(`${sayEmbed}`)
        .setColor("GREEN")
        .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);

};

module.exports.help = {
    name: "embed",
    categories: "fun",
    description: "Permet d'envoyer un embed.",
    usage: "=embed [message]",
};