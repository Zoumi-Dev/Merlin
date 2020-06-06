const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let ticket = client.guilds.cache.get(client.config.supportServer).channels.cache.find(ch => ch.name === `ticket-de-${message.author.username}`.toLowerCase());

    let sujet = args.join(" ");

    if (message.guild.id !== client.config.supportServer){
        let isNotInServerSupport = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", "Cette commande est disponible uniquement dans le serveur __**[Merlin'Bot Help](https://discord.gg/2wn6sQv)**__")
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(isNotInServerSupport);
    }

    if (ticket){
        let haveTicket = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", "Vous possedez déjà un ticket !")
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(haveTicket);
    }

    if (!sujet){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", `\`Utilisation: _ticket [sujet]\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noargs);
    }

    let chh = message.guild.channels.create(`ticket-de-${message.author.username}`, {
        type: "text",
    });

    await chh.then(async c => {
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .setDescription(`> <#${(await chh).id}>`)
            .addField("> Propriétaire du ticket", `<@${message.author.id}>`)
            .addField("> Sujet", `${sujet}`)
            .setTimestamp()
            .setFooter(client.config.footer);
        c.send(embed);
    });

    (await chh).updateOverwrite(message.guild.roles.cache.find(r => r.id === "712445027258990602"), {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false,
    });

    (await chh).updateOverwrite(message.guild.roles.cache.find(r => r.id === "718257168939483226").id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
    });

    (await chh).updateOverwrite(message.author.id, {
        SEND_MESSAGES: true,
        MENTION_EVERYONE: false,
        VIEW_CHANNEL: true,
    });

    let confirmEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .setDescription(`> Votre ticket (<#${(await chh).id}>) à été créé avec succès !`)
        .setTimestamp()
        .setFooter(`${client.config.footer}`);
    return message.channel.send(confirmEmbed);
};

module.exports.help = {
    name: "ticket",
    aliases: ["tck"],
    description: "Permet de créer un ticket.",
    usage: "=ticket",
};