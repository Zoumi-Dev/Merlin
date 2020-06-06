const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (client, message, args) => {

    message.delete();

    const reddit = ["meme", "dankmeme", "me_irl"];

    const rdm = reddit[Math.floor(Math.random() * reddit.length)];

    const img = await randomPuppy(rdm);

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREEN")
        .setDescription("> Et hop un même ici")
        .setImage(img)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);

};

module.exports.help = {
    name: "meme",
    categories: "fun",
    description: "Permet d'envoyer des mêmes :issou:.",
    usage: "=meme",
};