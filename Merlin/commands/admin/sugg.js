const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let suggChannel = client.guilds.cache.get("712358618993000499").channels.cache.get("712675195365752892");

    let sugge = args.join(" ");

    if (client.config.blacklist.includes(message.author.id)){
        let blacklisted = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLACK")
            .setDescription("Ohoh... Vous faites partie de la liste `blacklisted`, vous n'avez donc plus accès à cette commande. :cry:")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(blacklisted);
    }

    if (!args[0]) {
        let embed = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField('> :x: | Erreur', `\`Utilisation: ${client.serv["prefix"]}sugg [votre suggestion]\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(embed);
    }

    let suggEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField(`> Suggestion de ${message.author.tag}`, sugge)
        .setTimestamp()
        .setFooter(`${client.config.footer}`);

    if (!suggChannel){
        let noChannel = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", `Le salon \`<#${suggChannel.id}>\` n'existe pas, veuillez prévenir \`Zoumi#0336\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noChannel);
    }
    return suggChannel.send(suggEmbed).then(async em => {
        await em.react("✅");
        await em.react("❌");
    }) && await message.channel.send(`<@${message.author.id}>, votre suggestion à bien été envoyer !`);

};

module.exports.help = {
    name: "sugg",
    description: "Permet d'envoyer une suggestion dans le serveur help de Merlin.",
    usage: "=sugg [votre suggestion]",
};