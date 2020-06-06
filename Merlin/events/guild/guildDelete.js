const Discord = require('discord.js');

module.exports = async (client, guild) => {

    fs.unlinkSync(`././serveurs/${guild.name}.json`), (err) => {
        if (err) return console.log(err.message);
    };

    if (client.guilds.cache.get('712358618993000499').channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
        let joinEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :cry: | Quitter", `J'ai été retirer du server \`${guild.name}\` !`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return client.guilds.cache.get("712358618993000499").channels.cache.find(ch => ch.id === "713886808798396417").send(joinEmbed);
    }
};