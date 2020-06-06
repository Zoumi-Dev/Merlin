const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("ADMINISTRATOR")){
        let noperm = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("PURPLE")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv.prefix}checkconfig [nouveau prefix]\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noperm);
    }

    let confg = JSON.parse(fs.readFileSync(`././serveurs/${message.guild.name}.json`, 'utf8'));

    let finalconf = require('util').inspect(confg);

    return message.channel.send(`${finalconf}`, {code: "js"});

};

module.exports.help = {
    name: "checkconfig",
    categories: "parametre",
};