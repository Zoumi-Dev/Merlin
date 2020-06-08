const librcon = require('librcon');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (args < 3) {
        let msg = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}rcon [mot de passe] [ip] [port] [cmd]\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(msg);
    }

    try {
        let rc = await librcon.send(args[3], args[0], args[1], args[2]).then((rc) => {
            return message.channel.send("commande envoyée !") && message.channel.send(`${rc}`, {code: "php"});
        }).catch(e => { return message.channel.send(e.message) });
    } catch (e) {
        return message.channel.send(e.message);
    }
};

module.exports.help = {
    name: "rcon",
    aliases: ["rc"],
    categories: "pratique",
    description: "Permet d'effectuer une commande depuis discord :warning: il est préférable d'effectuer cette commande dans un salon privé.",
    usage: "_rcon [mot de passe] [ip] [port] [cmd]",
};
