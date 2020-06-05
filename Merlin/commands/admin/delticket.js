const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let ticket = client.guilds.cache.get(client.config.supportServer).channels.cache.find(ch => ch.name === `ticket-de-${message.author.username}`.toLowerCase());

    if (message.guild.id !== client.config.supportServer){
        let isNotInServerSupport = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", "`Cette commande est disponible uniquement dans le serveur` __**[Merlin'Bot Help](https://discord.gg/2wn6sQv)**__")
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(isNotInServerSupport);
    }

    if (!ticket){
        let haveTicket = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", "Vous ne possedez aucun ticket !")
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(haveTicket);
    }

    let ch = message.guild.channels.cache.find(ch => ch.name === `ticket-de-${message.author.username}`);

    ch.channel.delete();

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField("> :white_check_mark: | Succès", `<@${message.author.id}>, votre ticket à été supprimer avec succès !`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.guild.channels.cache.find(ch => ch.id === "712411614120509491").send(embed);

};

module.exports.help = {
    name: "delticket",
    aliases: ["del"],
};