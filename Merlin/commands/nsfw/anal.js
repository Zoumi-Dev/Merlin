const Discrord = require('discord.js');
const anal = [
    "",
];

exports.run = async (client, message, args) => {

    const imganal = anal[Math.floor(Math.random() * anal.length)];

    if (message.channel.nsfw === true){
        let analEmbed = new Discrord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription(`> \`Anal\` demandée par \`${message.author.username}\``)
            .setImage(imganal)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(analEmbed);
    }else{
        return message.channel.send(`<@${message.author.id}>, cette commande est disponible uniquement dans les salons nsfw !`);
    }
};