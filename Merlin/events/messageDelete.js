const Discord = require('discord.js');

module.exports = async (client, message) => {

    let fetchMessageDelete = await message.channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE'
    });

    const latestMessageDeleted = fetchMessageDelete.entries.first();

    const {executor} = latestMessageDeleted;

    if (message.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription("> :wastebasket: | Suppression de message")
            .addField("> Utilisateur", `\`${message.author.username}\``)
            .addField("> Message supprimé", `\`${message.content}\``)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel).send(logs);
    }
};