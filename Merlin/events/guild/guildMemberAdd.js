const Discord = require('discord.js');

module.exports = async (client, message, member) => {
    if (client.guilds.cache.get("712358618993000499")) {
        const channel = message.guild.channels.cache.get("712782027883020330");

        if (message.guild.channels.cache.find(ch => ch.name === "logs-merlin")) {
            let logs = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("GREY")
                .setDescription(`> \`${message.user.username} à rejoint le serveur discord !\``)
                .setTimestamp()
                .setFooter(client.config.footer);

            let embed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("GREY")
                .addField("> :wave: | Bienvenu(e)", `<@${message.user.id}>, nous à rejoins ! Nous t'invitons à aller lire le <#712413922790998076> et si tu souhaites ou si ce n'est pas déjà fait, ajoute le bot sur ton serveur discord !`)
                .setTimestamp()
                .setFooter(client.config.footer);
            return message.guild.channels.cache.find(ch => ch.name === "logs-merlin").send(logs) && channel.send(embed) && message.guild.member(message.user.id).roles.add("712445027258990602");
        }
    }
};