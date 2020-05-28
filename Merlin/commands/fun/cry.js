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

    /*
    const gif = await fetch(`https://api.tenor.com/v1/search?q=cry-manga&key=4XYAQG0O2S3Y&limit=1`)
        .then(res => res.json())
        .then(json => message.reply(json.results[0].url))
        .catch(e => {
            return message.reply('Imossible de trouver le gif demandé 🙁');
        });
    */

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