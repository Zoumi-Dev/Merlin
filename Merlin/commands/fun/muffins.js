const Discord = require('discord.js');
const muffin = [
    "https://wallpapercrafter.com/uploads/posts/41557-___chocolate-chip-muffins.jpg",
    "https://i.pinimg.com/originals/e2/1d/3f/e21d3f67bf1afc793415b939c0477d91.jpg",
    "https://c4.wallpaperflare.com/wallpaper/642/617/159/muffins-4k-background-hd-wallpaper-preview.jpg",
];

module.exports.run = async (client, message, args) => {

    message.delete();

    let imgmuffins = muffin[Math.floor(Math.random() * muffin.length)];

    let muffinEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .setDescription("> This is muffin time !")
        .setImage(imgmuffins)
        .setTimestamp()
        .setFooter("Merlin | Powered by Zoumi#0336");
    return message.channel.send(muffinEmbed);
};

module.exports.help = {
    name: "muffins",
    aliases: ["muf"],
};