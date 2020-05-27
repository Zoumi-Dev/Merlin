const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (args < 2){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", "`Utilisation: _choisis [argument] || [argument]`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    let choix = args[1] && args[2];

    let choose = Math.floor(Math.random() * args[2])

};

module.exports.help = {
    name: "choisis",
    aliases: ["choose"],
    description: "Permet de choisir entre 2 disponibilité.",
    usage: "_choisis zoumi || jordan <= choisis entre zoumi et jordan.",
};