const Discord = require('discord.js');

module.exports = async (client, channel) => {

    if (channel.type === "dm"){
        return false;
    }

    let fetchChannelCreate = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_CREATE'
    });

    const latestChannelCreate = fetchChannelCreate.entries.first();

    const {executor} = latestChannelCreate;

    let logsChannel = channel.guild.channels.cache.find(ch => ch.name === client.serv["logs-channel"]) || channel.guild.channels.cache.find(ch => ch.id === client.serv["logs-channel"]);
        
    if (logsChannel) {
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#82E5CC")
            .setDescription("> :unlock: | Création de salon")
            .addField("> Utilisateur", `\`${executor.username}\``)
            .addField("> Nom du salon créer", `\`${channel.name}\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return logsChannel.send(logs);
    }
};