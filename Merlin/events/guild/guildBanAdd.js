const Discord = require('discord.js');
const fs = require('fs');

module.exports = async (client, guild) => {

    let fetchBanAdd = await guild.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_BAN_ADD'
    });

    const latestBanAdd = fetchBanAdd.entries.first();

    const {executor} = latestBanAdd;

    client.serv = JSON.parse(fs.readFileSync(`././serveurs/${guild.guild.name}.json`, 'utf8'));

    let logsChannel = message.guild.channels.cache.find(ch => ch.name === client.serv["logs-channel"]) || message.guild.channels.cache.find(ch => ch.id === client.serv["logs-channel"]);

    if (logsChannel) {
        let logs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#82E5CC")
            .setDescription("> :unlock: | Utilisateur bannie")
            .addField("> Utilisateur", `\`${executor.username}\``)
            .addField("> Reason", `\`\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return logsChannel.send(logs);
    }
};