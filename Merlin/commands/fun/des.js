const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let randomDes = Math.floor(Math.random() * 6) + 1;

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREEN")
        .setDescription("> :game_die: | Lancement du dé !")
        .addField("> Et hop !", `Le dé est tomber sur **${randomDes}**`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);

};

module.exports.help = {
    name: "dice",
    aliases: ["dice"],
    description: "Permet de lancer un dés !",
    usage: "_des"
};