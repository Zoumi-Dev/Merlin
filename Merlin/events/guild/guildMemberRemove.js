const Discord = require('discord.js');

module.exports = async (client, message) => {
    if (client.guilds.cache.get("712358618993000499")) {
        const channel = message.guild.channels.cache.get("712782027883020330");

        if (message.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
            let logs = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("GREY")
                .setDescription(`> \`${message.user.username} à quitter le serveur discord !\``)
                .setTimestamp()
                .setFooter(client.config.footer);
            let embed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("GREY")
                .addField("> :cry: | Aurevoir", `<@${message.user.id}>, nous à quitter ! Nous espérons sont retour...`)
                .setTimestamp()
                .setFooter(client.config.footer);
            return channel.send(embed) && message.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel).send(logs);
        }
    }
};