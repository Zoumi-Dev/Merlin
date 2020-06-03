const Discord = require('discord.js');
const imageseven = [
    "https://media.giphy.com/media/BrqQjuljpwQw/giphy.gif",
    "https://media.giphy.com/media/D68e7NwS28vIY/giphy.gif",
    "https://media.giphy.com/media/maz1fFdJ4CAy4/giphy.gif",
    "https://media.giphy.com/media/huxfXZkzk9OFO/giphy.gif",
    "https://media.giphy.com/media/D10bI1uIjmxXO/giphy.gif",
    "https://media.giphy.com/media/o1wHsjrMy4pTa/giphy.gif",
    "https://pixelz.cc/wp-content/uploads/2019/02/nanatsu-no-taizai-seven-deadly-sins-elizabeth-liones-uhd-4k-wallpaper.jpg",
    "https://images8.alphacoders.com/933/933850.jpg",
    "https://images2.alphacoders.com/933/933799.jpg",
    "https://wallpapermemory.com/uploads/755/the-seven-7-deadly-sins-wallpaper-ultra-hd-4k-281357.jpg",
    "https://www.99images.com/photos/wallpapers/anime/the-seven-deadly-sinsandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-0pze6.jpg?v=1577322496",
    "https://pixelz.cc/wp-content/uploads/2019/12/nanatsu-no-taizai-seven-deadly-sins-gowther-cherry-blossoms-uhd-4k-wallpaper.jpg",
    "https://images.wallpapersden.com/image/download/return-of-the-king-demon_68620_3840x2160.jpg",

];
const imagehunter = [
    "https://media.giphy.com/media/nbB1CV1fazlGo/giphy.gif",
    "https://media.giphy.com/media/nErpjSJo49MoU/giphy.gif",
    "https://media.giphy.com/media/BwMgGAVOwT4ru/giphy.gif",
    "https://media.giphy.com/media/frSfC5NcmyF7q/giphy.gif",
    "https://media.giphy.com/media/uwwHY7pIjT29i/giphy.gif",
    "https://media.giphy.com/media/etW2P2cvB0PYY/giphy.gif",
    "https://media.giphy.com/media/gwXErBQAVAp4Q/giphy.gif",
    "https://images2.alphacoders.com/713/thumb-350-713755.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2rIePVQ4JnZ_MgDJof8QXP2PAI_ZmSoOO0foh04u2u5khdgzS&usqp=CAU",
    "https://images6.alphacoders.com/102/thumb-350-1029797.jpg",
    "https://i.pinimg.com/originals/88/8f/f8/888ff8778745564042964a9018506b39.jpg",
    "https://images7.alphacoders.com/949/thumb-350-949319.png",
    "https://wallpaperset.com/w/full/d/3/a/25511.jpg",
    "https://i.pinimg.com/originals/a7/fd/29/a7fd292cfcaa5bb9847e920899ee42bb.jpg",
    "https://c4.wallpaperflare.com/wallpaper/515/114/546/anime-hunter-x-hunter-hisoka-hunter-%C3%97-hunter-hd-wallpaper-preview.jpg",
    "https://i.pinimg.com/originals/95/8e/99/958e99b0e30b5b46bc14888692999afb.jpg",
    "https://wallpapermemory.com/uploads/791/hunter-x-hunter-wallpaper-full-hd-1080p-10926.jpg",
];
const imagenaruto = [
    "https://media.giphy.com/media/8Lc5xmvzRhlLy/giphy.gif",
    "https://media.giphy.com/media/2y98KScHKeaQM/giphy.gif",
    "https://media.giphy.com/media/hQGwNDkBZedmU/giphy.gif",
    "https://media.giphy.com/media/Mj0gk1wnekXC0/giphy.gif",
    "https://media.giphy.com/media/OU6tgBi0YJ4HK/giphy.gif",
    "https://images.hdqwalls.com/wallpapers/sakura-haruno-from-naruto-4k-oa.jpg",
    "https://i.pinimg.com/originals/4b/8c/c5/4b8cc50d5b9092883f69aecaa23c7d1f.jpg",
    "https://cdn.statically.io/img/wallpapercave.com/wp/wp3914161.jpg",
    "https://cdn.statically.io/img/www.itl.cat/pngfile/big/5-54841_badass-wallpapers-hd-elegant-naruto-wallpapers-hd-elegant.jpg",
];
const imagedbz = [
    "https://tenor.com/wMXJ.gif",
    "https://tenor.com/Q6Hy.gif",
    "https://tenor.com/LQt1.gif",
    "https://tenor.com/6S7C.gif",
    "https://media.giphy.com/media/1gVUhlXhETaRRxzeHO/giphy.gif",
    "https://media.giphy.com/media/4EEHMnD7FtkGRmK9qj/giphy.gif",
    "https://media.giphy.com/media/WSsM98qp4ejfJzIVkw/giphy.gif",
    "https://media.giphy.com/media/BqsndHTH6cbAY/giphy.gif",
    "https://media.giphy.com/media/109epNnxnLTMha/giphy.gif",
    "https://media.giphy.com/media/JTjiT1dvFdSpi/giphy.gif",
    "https://media.giphy.com/media/1KNmlBMrSsGT798Dot/giphy.gif",
    "https://media.giphy.com/media/2tLyf84igtdykH104y/giphy.gif",
];

const snekfetch = require('snekfetch');

module.exports.run = async (client, message, args) => {

    if (!args[0]){
        return message.channel.send(`<@${message.author.id}>, voici la liste des images disponibles:\n• \`seven\` The seven deadly sins\n• \`hunter\` Hunter X Hunter\n• \`naruto\` Naruto\n• \`dbz\` Dragon ball z`);
    }

    const imgseven = imageseven[Math.floor(Math.random() * imageseven.length)];

    if (args[0] === "seven") {
        let im = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .setDescription("> The seven deadly sins")
            .setImage(imgseven)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(im);
    }

    const imghunter = imagehunter[Math.floor(Math.random() * imagehunter.length)];

    if (args[0] === "hunter") {
        let im = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .setDescription("> Hunter X Hunter")
            .setImage(imghunter)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(im);
    }

    const imgnaruto = imagenaruto[Math.floor(Math.random() * imagenaruto.length)];

    if (args[0] === "naruto") {
        let im = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .setDescription("> Naruto")
            .setImage(imgnaruto)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(im);
    }

    const imgdbz = imagedbz[Math.floor(Math.random() * imagedbz.length)];

    if (args[0] === "dbz") {
        let im = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .setDescription("> Dragon ball z")
            .setImage(imgdbz)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(im);
    }
};

module.exports.help = {
    name: "img",
    categories: "fun",
};