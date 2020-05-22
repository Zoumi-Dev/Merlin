const Discrord = require('discord.js');
const hot = [
    "https://ae01.alicdn.com/kf/HTB1d.urbzvuK1Rjy0Faq6x2aVXay/Hot-Sexy-Girl-Photo-SILK-POSTER-Decorative-Wall-painting-24x36inch.jpg",
    "https://i.pinimg.com/originals/f9/e5/6c/f9e56c060e83828f28656cdc2fc12045.jpg",
    "https://i.pinimg.com/originals/46/a8/f2/46a8f26f306108eb96f77385e8499e4c.jpg",
    "https://pbs.twimg.com/media/DfB7_jDU0AA9_RJ.jpg",
    "https://i.pinimg.com/originals/7d/d0/0a/7dd00aa6d7c14882c6a1c92cf0e4d2b7.jpg",
];

exports.run = async (client, message, args) => {

    const imghot = hot[Math.floor(Math.random() * hot.length)];

    if (message.channel.nsfw === true){
        let assEmbed = new Discrord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription(`> \`Hot\` demandée par \`${message.author.username}\``)
            .setImage(imghot)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(assEmbed);
    }else{
        return message.channel.send(`<@${message.author.id}>, cette commande est disponible uniquement dans les salons nsfw !`);
    }
};