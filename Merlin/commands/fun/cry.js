const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const fetch = require('node-fetch');

const cry = [
    "https://media.giphy.com/media/c1FqhfGG9YaPe/giphy.gif",
    "https://media.giphy.com/media/AI7yqKC5Ov0B2/giphy.gif",
    "https://media.giphy.com/media/MWeuqxT0M0Lx6/giphy.gif",
    "https://media.giphy.com/media/11WhdeCxSM5lyo/giphy.gif",
    "https://media.giphy.com/media/ZSTiMZK3hlhjq/giphy.gif",
];

module.exports.run = async(client, message, args) => {

    message.delete();

    let rdmCry = cry[Math.floor(Math.random() * cry.length)];

    const em = new Discord.MessageEmbed()
        .setTitle("Merlin")
        .setDescription(`> <@${message.author.id}>, pleure :cry:`)
        .setColor('GREEN')
        .setImage(rdmCry)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(em);
};

module.exports.help = {
    name: "cry",
};