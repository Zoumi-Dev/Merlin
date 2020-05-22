const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    message.delete();

    if (message.author.id !== client.config.zoumi){
        return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission d'utiliser cette commande !`);
    }

    let update = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .setThumbnail(client.user.avatarURL)
        .addField("> Update #1", "**Nouveautés**\n\n• `infos` Permet de voir les informations d'un utilisateur.\n• `avatar` Permet d'afficher la photo de profil d'un utilisateur.\n\n**Mise à jour**\n\n• `help` De nouvelle commande font leur apparition !\n\n**Prochainement**\n\n• `play etc...` ajout des commandes de musique.")
        .setTimestamp()
        .setFooter("Merlin | Powered by Zoumi#0336");
    return message.channel.send(update);
};