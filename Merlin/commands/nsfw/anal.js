const Discrord = require('discord.js');
const anal = [
    "",
];

module.exports.run = async (client, message, args) => {

    const imganal = anal[Math.floor(Math.random() * anal.length)];

    if (message.channel.nsfw === true){
        let analEmbed = new Discrord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .setDescription(`> \`Anal\` demandée par \`${message.author.username}\``)
            .setImage(imganal)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(analEmbed);
    }else{
        return message.channel.send(`<@${message.author.id}>, cette commande est disponible uniquement dans les salons nsfw !`);
    }
};

module.exports.help = {
    name: "anal",
};