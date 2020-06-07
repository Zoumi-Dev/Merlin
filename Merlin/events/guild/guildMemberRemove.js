const Discord = require('discord.js');

module.exports = async (client, message) => {
    const channel = message.guild.channels.cache.get("712782027883020330");

    if (message.guild.id === client.config.supportServer) {
        if (message.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
            let logs = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("#82E5CC")
                .setDescription(`> \`${message.user.username} à quitter le serveur discord !\``)
                .setTimestamp()
                .setFooter(client.config.footer);
            let embed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("#82E5CC")
                .addField("> :cry: | Aurevoir", `<@${message.user.id}>, nous à quitté ! Nous espérons son retour...`)
                .setTimestamp()
                .setFooter(client.config.footer);
            return channel.send(embed) && message.guild.channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel).send(logs);
        }
    }
};