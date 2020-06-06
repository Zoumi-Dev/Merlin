const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) {
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}unban [utilisateur]\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noargs);
    }

};

module.exports.help = {
    name: "unban",
    description: "Permet de débannir un utilisateur.",
    usage: "_unban [utilisateur]",
};