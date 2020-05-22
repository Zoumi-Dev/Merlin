const Discrord = require('discord.js');
const ass = [
    "https://i.ebayimg.com/images/g/0GUAAOSwmPFcmLxY/s-l300.jpg",
    "",
];

exports.run = async (client, message, args) => {

    const imgass = ass[Math.floor(Math.random() * ass.length)];

    if (message.channel.nsfw === true){
        let assEmbed = new Discrord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription(`> \`Ass\` demandée par \`${message.author.username}\``)
            .setImage(imgass)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(assEmbed);
    }else{
        return message.channel.send(`<@${message.author.id}>, cette commande est disponible uniquement dans les salons nsfw !`);
    }
};