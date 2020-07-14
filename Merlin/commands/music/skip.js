const ytdl = require('ytdl-core');
const ytdlDiscord = require('ytdl-core-discord');
const Discord = require('discord.js');
const { YOUTUBE_API_KEY } = require("../../config.json");
const YouTubeAPI = require('simple-youtube-api');
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);

module.exports.run = async (client, message, args) => {

    const {channel} = message.member.voice;

    if (!channel) {
        let notInChannel = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .addField(`${client.emojis.cache.find(e => e.id === client.emo.pleure)} | Erreur`, "Vous devez être dans le même salon vocal du bot !")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(notInChannel);
    }

    const queue = message.client.queue.get(message.guild.id);

    if (!queue) {
        let noQueue = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .addField(`${client.emojis.cache.find(e => e.id === client.emo.pleure)} | Erreur`, "Aucune musique après celle-ci, je ne peux donc skip cette musique !")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noQueue);
    } else {
        queue.connection.dispatcher.end();
        return message.channel.send("skiped");
    }
};

module.exports.help = {
    name: "skip",
    aliases: ["s"],
    categories: "musique",
};