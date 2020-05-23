const Discord = require('discord.js');

module.exports = async (client, guild) => {

    let fetchBanAdd = await guild.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_BAN_ADD'
    });

    const latestBanAdd = fetchBanAdd.entries.first();

    const {executor} = latestBanAdd;

    if (guild.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription("> :unlock: | Utilisateur bannie")
            .addField("> Utilisateur", `\`${executor.username}\``)
            .addField("> Reason", `\`\``)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return guild.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel).send(logs);
    }
};