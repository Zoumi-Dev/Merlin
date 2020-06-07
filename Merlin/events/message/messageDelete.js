const Discord = require('discord.js');

module.exports = async (client, message) => {

    let fetchMessageDelete = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE'
    });

    const latestMessageDeleted = fetchMessageDelete.entries.first();

    const {executor} = latestMessageDeleted;

    let logsChannel = message.guild.channels.cache.find(ch => ch.name === client.serv["logs-channel"]) || message.guild.channels.cache.find(ch => ch.id === client.serv["logs-channel"]);

    if (logsChannel) {
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription("> :wastebasket: | Suppression de message")
            .addField("> Utilisateur", `\`${executor.username}\``)
            .addField("> Message supprimé", `\`${message.content}\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        logsChannel.send(logs);
    }
};