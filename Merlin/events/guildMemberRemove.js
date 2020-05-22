const Discord = require('discord.js');

module.exports = async (client, message) => {
    if (client.guilds.cache.get("712358618993000499")) {
        const channel = message.guild.channels.cache.get("712782027883020330");

        if (message.guild.channels.cache.find(ch => ch.name === "logs-meliodas")) {
            let logs = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("GREY")
                .setDescription(`> \`${message.user.username} à quitter le serveur discord !\``)
                .setTimestamp()
                .setFooter("Merlin | Powered by Zoumi#0336");
            let embed = new Discord.MessageEmbed()
                .setAuthor("Meliodas")
                .setColor("GREY")
                .addField("> :cry: | Aurevoir", `<@${message.user.id}>, nous à quitter ! Nous espérons sont retour...`)
                .setTimestamp()
                .setFooter("Merlin | Powered by Zoumi#0336");
            return channel.send(embed) && message.guild.channels.cache.find(ch => ch.name === "logs-meliodas").send(logs);
        }
    }
};