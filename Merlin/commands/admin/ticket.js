const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let ticket = client.guilds.cache.get(client.config.supportServer).channels.cache.find(ch => ch.name === `ticket-de-${message.author.username}`);

    let sujet = args.join(" ");

    let chh = message.guild.channels.create(`ticket-de-${message.author.username}`, {
        type: "text",
        permissionOverwrites: [{
            id: message.guild.roles.cache.find(r => r.name === "villageois"),
            deny: "VIEW_CHANNEL",
        }]
    });

    if (!sujet){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", "`Utilisation: _ticket [sujet]`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    if (message.guild.id !== client.config.supportServer){
        let isNotInServerSupport = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", "`Cette commande est disponible uniquement dans le serveur` __**Merlin'Bot Help**__")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(isNotInServerSupport);
    }

    if (ticket){
        let haveTicket = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", "`Vous possedez déjà un ticket !`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(haveTicket);
    }

    chh;


    let confirmEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .setDescription(`> Votre ticket (<#${(await chh).id}>) à été créer avec succès !`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(confirmEmbed);
};

module.exports.help = {
    name: "ticket",
    aliases: ["tck"],
    description: "Permet de créer un ticket.",
    usage: "_ticket",
};