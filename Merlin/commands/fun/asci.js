const figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    var maxLenght = 100;

    if (!args.join(" ")){
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", "`Utilisation _asci [text]`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(embed);
    }

    if (args.join(" ").length > maxLenght){
        return message.reply(`le maximum de caractère est de ${maxLenght}`);
    }

    figlet(`${args.join(" ")}`, (err, data) => {
        if (err) return message.channel.send(err.message, {code: "js"});
        return message.channel.send(`${data}`, {code: "AsciiArt"});
    });
};

module.exports.help = {
    name: "asci",
};