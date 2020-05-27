const Discord = require('discord.js');
const solenolyrics = require('solenolyrics');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Erreur", "`Utilisation: _lyrics [musique]`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    let lyrics = await solenolyrics.requestLyricsFor(args.join(" "));

    try {
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription(`> ${lyrics}`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(embed);
    } catch (e) {
        return message.channel.send(e.message);
    }
};

module.exports.help = {
    name: "lyrics",
    description: "Permet de voir les parôles d'une musique.",
    usage: "_lyrics [musique]"
};