const Discord = require('discord.js');

module.exports = async (client, message) => {

    if (message.author.bot) return;

    if (client.guilds.cache.get('712358618993000499').channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
        let dmEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#82E5CC")
            .setDescription("> :incoming_envelope: | Message priver reçu !")
            .addField("> :bust_in_silhouette: | Utilisateur", `<@${message.author.id}>`)
            .addField("> Message", `\`${message.content}\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return client.guilds.cache.get('712358618993000499').channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel).send(dmEmbed);
    }
};