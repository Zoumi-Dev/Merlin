const Discord = require('discord.js');
const fs = require('fs');

module.exports = async (client, guild) => {

    /*
    if (fs.exists(`../../${client.guilds.cache.get(guild.id).name}.json`, (exists => {
        exists.valueOf();
    }))){
        return console.log(`Le dossier ${guild.name}.json existe déjà !`);
    }else{
        fs.mkdir(`../../${guild.name}.json`, {recursive: true}, (err => {
            if (err) return console.log(err.message);
        }));
    }
    */

    if (client.guilds.cache.get('712358618993000499').channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
        let joinEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :grinning: | Rejoint", `J'ai été ajouter sur le server \`${guild.name}\` !`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return client.guilds.cache.get("712358618993000499").channels.cache.find(ch => ch.id === "713886808798396417").send(joinEmbed);
    }
};