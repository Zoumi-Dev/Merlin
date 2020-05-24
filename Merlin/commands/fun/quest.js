const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete();

    let reponse = ["oui", "non", "peut-être", "peut-être que oui", "peut-être que non", "je sais pas"];

    let randomReponse = reponse[Math.floor(Math.random() * reponse.length)];

    let repEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .setDescription(`> Question posé par <@${message.author.id}>`)
        .addField("> Question", args.join(' '))
        .addField("> Réponse", randomReponse)
        .setTimestamp()
        .setFooter("Merlin | Powered by Zoumi#0336");
    return message.channel.send(repEmbed);

};

module.exports.help = {
    name: "quest",
    aliases: ["8ball"],
};