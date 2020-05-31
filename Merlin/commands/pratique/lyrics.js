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
        if (lyrics.length < 2048) {
            const lyricsEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor('GREEN')
                .setDescription(`> ${lyrics.trim()}`)
                .setTimestamp()
                .setFooter(client.config.footer);
            return message.channel.send(lyricsEmbed);
        } else {
            // lyrics.length > 2048
            const firstLyricsEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor('GREEN')
                .setDescription(lyrics.slice(0, 2048))
            const secondLyricsEmbed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setDescription(lyrics.slice(2048, lyrics.length))
                .setTimestamp()
                .setFooter(client.config.footer)
            return await message.channel.send(firstLyricsEmbed) && message.channel.send(secondLyricsEmbed);
        }
    } catch (e) {
        return message.channel.send(e.message);
    }
};

module.exports.help = {
    name: "lyrics",
    description: "Permet de voir les parôles d'une musique.",
    usage: "_lyrics [musique]"
};