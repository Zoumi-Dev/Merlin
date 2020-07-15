const ytdl = require('ytdl-core');
const ytdlDiscord = require('ytdl-core-discord');
const Discord = require('discord.js');
const { YOUTUBE_API_KEY } = require("../../config.json");
const YouTubeAPI = require('simple-youtube-api');
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);

module.exports.run = async (client, message, args) => {

    const { channel } = message.member.voice;

    if (!channel){
        let notInChannel = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .addField(":x: | Erreur", "Vous devez être dans un salon vocal !")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(notInChannel);
    }

    const search = args.join(" ");
    const url = args[0];
    const videoPattern = /^(https?:\/\/)?(www.)?(youtube.com|youtu.?be)\/.+$/gi;
    const playlistPattern = /^.(list=)([^#&?]).*/gi;
    const serveurQueue = message.client.queue.get(message.guild.id);
    const urlValid = videoPattern.test(url);

    let songInfo = null;
    let song = null;

    if (urlValid){
        songInfo = await ytdl.getInfo(url);
        song = {
            title: songInfo.title,
            url: songInfo.video_url,
            duration: songInfo.length_seconds,
        }
    }else{
        const results = await youtube.searchVideos(search, 1);
        songInfo = await ytdl.getInfo(results[0].url);
        song = {
            title: songInfo.title,
            url: songInfo.video_url,
            duration: songInfo.length_seconds,
        }
    }

    const queueConstruct = {
        textChannel: message.channel,
        channel,
        voiceChannel: channel.id,
        connection: null,
        songs: [],
        loops: false,
        volume: 50,
        playing: true,
    };
    console.log(queueConstruct);
    if (serveurQueue){
        serveurQueue.songs.push(song);
        let queued = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .addField(`${client.emojis.cache.find(e => e.id === client.emo.dab)} | Succès`, `La musique **${song.title}** à été ajouter à la queue avec succès !`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(queued);
    }


    queueConstruct.songs.push(song);
    message.client.queue.set(message.guild.id, queueConstruct);

    const play = async song => {
        try {
            const queue = message.client.queue.get(message.guild.id);
            if (!song) {
                setTimeout(() => {
                    channel.leave();
                    message.client.queue.delete(message.guild.id);
                    let afk = new Discord.MessageEmbed()
                        .setAuthor("Merlin")
                        .setColor("RED")
                        .addField(`${client.emojis.cache.find(e => e.id === client.emo.kawai)} | Afk`, `J'ai quitter le salon <#${channel.id}> pour la raison \`AFK\`.`)
                        .setTimestamp()
                        .setFooter(client.config.footer);
                    message.channel.send(afk);
                }, 10000);
                return false;
            }

            const dispatcher = queue.connection
                .play(await ytdlDiscord(song.url), {type: "opus"})
                .on("finish", () => {
                    if (queue.loop) {
                        let latestSong = queue.songs.shift();
                        queue.songs.push(latestSong);
                        play(queue.songs[0]);
                    } else {
                        queue.songs.shift();
                        play(queue.songs[0]);
                    }
                })
                .on("error", (error) => {
                    console.error(error);
                    queue.songs.shift();
                    play(queue.songs[0]);
                });
            dispatcher.setVolumeLogarithmic(queue.volume / 100);
            let songRuning = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("RED")
                .addField(`> ${client.emojis.cache.find(e => e.id === client.emo.dab)} | En train de jouer...`, `🎶 | **Musique**\n${song.title}\n⏳ | **Temps restants**\n${new Date(song.duration * 1000).toISOString().substr(11, 8)}\n**Volume**\n**50%**`)
                .setTimestamp()
                .setFooter(client.config.footer);
            await queue.textChannel.send(songRuning);
        }catch (e) {
            console.log(e);
        }
    };

    try{
        queueConstruct.connection = await channel.join();
        await play(queueConstruct.songs[0]);
    } catch (error) {
        console.error(error);
        message.client.queue.delete(message.guild.id);
        return channel.leave();
    }

};

module.exports.help = {
    name: "play",
    aliases: ["p"],
    description: "Permet de jouer de la musique.",
    categories: "musique",
};