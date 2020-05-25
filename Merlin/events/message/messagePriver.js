const Discord = require('discord.js');

module.exports = async (client, message) => {

    if (message.author.bot) return;

    if (client.guilds.cache.get('712358618993000499').channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel)) {
        let dmEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription("> :incoming_envelope: | Message priver reçu !")
            .addField("> :bust_in_silhouette: | Utilisateur", `<@${message.author.id}>`)
            .addField("> Message", `\`${message.content}\``)
            .setTimestamp()
            .setFooter('Merlin | Powered by Zoumi#0336');
        return client.guilds.cache.get('712358618993000499').channels.cache.find(ch => ch.name === client.config.DEFAULT_SETTINGS.logsChannel).send(dmEmbed);
    }
};