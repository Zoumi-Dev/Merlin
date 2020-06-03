const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    message.delete();

    let sayEmbed = args.join(' ');

    if (!sayEmbed){
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", "`Utilisation: _embed [message]`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(embed);
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setDescription(`${sayEmbed}`)
        .setColor("GREEN")
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);

};

module.exports.help = {
    name: "embed",
    categories: "fun",
    description: "Permet d'envoyer un embed.",
    usage: "_embed [message]",
};