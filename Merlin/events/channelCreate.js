const Discord = require('discord.js');

module.exports = async (client, channel) => {

    let fetchChannelCreate = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_CREATE'
    });

    const latestChannelCreate = fetchChannelCreate.entries.first();

    const {executor} = latestChannelCreate;

    if (channel.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription("> :unlock: | Création de salon")
            .addField("> Utilisateur", `\`${executor.username}\``)
            .addField("> Nom du salon créer", `\`${channel.name}\``)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return channel.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel).send(logs);
    }
};