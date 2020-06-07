const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!client.config.ownerID.includes(message.author.id)){
        return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission d'utiliser cette commande !`);
    }

    let ban = message.guild.emojis.cache.find(m => m.name === "ban1");

    let update = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .setThumbnail(client.user.avatarURL())
        .addField("> Update #3",
            "__**Mise à jour**__\n" +
            "✦ `ban` la raison est désormait fixe.\n" +
            "✦ `kick` la raison est désormait fixe.\n" +
            "✦ `avatar` Plus besoin de mentionner ! Taper juste sont pseudo.\n" +
            "__**Ajout**__\n" +
            "✦ `asci` Permet d'afficher un text sous format caractère.\n" +
            "✦ `bon` Permet d'envoyer un mème bon toutou.\n" +
            "✦ `setprefix` Permet de définir le prefix de merlin.\n" +
            "✦ `checkconfig` Permet de voir la config du serveur.\n" +
            "__**Informations**__\n" +
            "✦ Les commandes `Paramètre` arriverons très prochainement."
        )
        .setTimestamp()
        .setFooter(`${client.config.footer}`);
    return message.channel.send(update).then(m => m.react(ban));
};

module.exports.help = {
    name: "update",
    categories: "owner",
};