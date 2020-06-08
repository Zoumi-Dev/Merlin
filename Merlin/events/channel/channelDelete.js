const Discord = require('discord.js');

module.exports = async (client, channel) => {

    let fetchChannelDelete = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE'
    });

    const latestChannelDelete = fetchChannelDelete.entries.first();

    const {executor} = latestChannelDelete;

    let logsChannel = channel.guild.channels.cache.find(ch => ch.name === client.serv["logs-channel"]) || channel.guild.channels.cache.find(ch => ch.id === client.serv["logs-channel"]);

    if (logsChannel) {
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription("> :wastebasket: | Suppression de salon")
            .addField("> Utilisateur", `\`${executor.username}\``)
            .addField("> Nom du salon supprimer", `\`${channel.name}\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return logsChannel.send(logs);
    }
};