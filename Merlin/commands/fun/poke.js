const Discord = require('discord.js');
const cl = require('nekos.life');
const nekos = new cl();
const fetch = require('node-fetch');

const hugimg = [
    "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
    "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
    "https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
    "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
    "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
    "https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif",
    "https://media.giphy.com/media/cotftb3AXgfV6/giphy.gif",
    "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
    "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
    "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
    "https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif",
    "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
];

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(u => u.user.username === args[0]));

    /*
    let hug = hugimg[Math.floor(Math.random() * hugimg.length)];
     */
    var gif = await fetch("https://nekos.life/api/v2/img/poke")
        .then(res => res.json())
        .then(json => json.url)

    if (!args[0]) {
        let hugEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> <@${message.author.id}> donne un petit coup à <@${client.user.id}>`)
            .setColor("GREEN")
            .setImage(gif)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(hugEmbed);
    }else{
        if (usr){
            let hugEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setDescription(`> <@${message.author.id}> donne un petit coup à <@${usr.user.id}>`)
                .setColor("GREEN")
                .setImage(gif)
                .setTimestamp()
                .setFooter(client.config.footer);
            return message.channel.send(hugEmbed);
        }
    }
};

module.exports.help = {
    name: "poke",
    categories: "fun",
};