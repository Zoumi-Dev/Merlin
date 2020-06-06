const Discord = require('discord.js');
const fetch = require('node-fetch');
const kissimg = [
    "https://media.giphy.com/media/iseq9MQgxo4aQ/giphy.gif",
    "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
    "https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif",
    "https://media.giphy.com/media/3ddeHaOqi7UoE/giphy.gif",
    "https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif",
    "https://media.giphy.com/media/sS7Jac8n7L3Ve/giphy.gif",
    "https://media.giphy.com/media/oZNdL0smZoHoQ/giphy.gif",
    "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
    "https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif",
    "https://media.giphy.com/media/w9xag7QUzLgLC/giphy.gif",
    "https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif",
];

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    /*
    let kiss = kissimg[Math.floor(Math.random() * kissimg.length)];
     */

    var gif = await fetch("https://nekos.life/api/v2/img/kiss")
        .then(res => res.json())
        .then(json => json.url);

    if (!args[0]) {
        let kissEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> <@${message.author.id}> a embrassé <@${client.user.id}> :heart:`)
            .setColor("GREEN")
            .setImage(gif)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(kissEmbed);
    }else{
        if (usr){
            let kissEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setDescription(`> <@${message.author.id}> a embrassé <@${usr.user.id}> :heart:`)
                .setImage(gif)
                .setTimestamp()
                .setFooter(client.config.footer);
            return message.channel.send(kissEmbed);
        }
    }

};

module.exports.help = {
    name: "kiss",
    categories: "fun",
};