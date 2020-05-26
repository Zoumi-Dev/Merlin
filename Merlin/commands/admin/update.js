const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (message.author.id !== client.config.zoumi){
        return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission d'utiliser cette commande !`);
    }

    let ban = message.guild.emojis.cache.find(m => m.name === "ban1");

    let update = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .setThumbnail(client.user.avatarURL())
        .addField("> Update #1",
            "__**Mise à jour**__\n" +
            "✦ `_server-infos` de nouvelle informations font leur apparition !\n" +
            "✦ `_help` de nouvelle commande font leur apparition + nouveauté vous pouvez désormait voir les informations d'une commande en particulier !\n" +
            "__**Ajout**__\n" +
            "✦ Aucune pour le moment\n" +
            "__**Informations**__\n" +
            "✦ les embeds rouge signifie les commandes `nsfw`, les verte signifie les commandes `funs`, les bleu signifie les commandes donnant des `informations` et les rose singifie les commandes `administratives`"
        )
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(update).then(m => m.react(ban));
};

module.exports.help = {
    name: "update",
};