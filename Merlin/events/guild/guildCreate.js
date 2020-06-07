const Discord = require('discord.js');
const fs = require('fs');

module.exports = async (client, guild) => {

    fs.writeFileSync(`././serveurs/${guild.name}.json`, `{\n"${guild.name}": "${guild.id}",\n"prefix": "=",\n"guildMemberAdd": false,\n"guildMemberRemove": false,\n"logs-channel": false\n}`, 'utf-8'), (err) => {
        if (err) return console.log(err.message);
    };

    if (client.guilds.cache.get('712358618993000499').channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
        let joinEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#82E5CC")
            .addField("> :grinning: | Rejoint", `J'ai été ajouter sur le serveur \`${guild.name}\` !`)
            .addField("> :crown: | Owner", `✦ ${guild.owner.user.tag}`)
            .addField("> :busts_in_silhouette: | Membre(s)", `✦ ${guild.memberCount}`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return client.guilds.cache.get("712358618993000499").channels.cache.find(ch => ch.id === "713886808798396417").send(joinEmbed);
    }
};