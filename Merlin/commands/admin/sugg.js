const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let suggChannel = client.guilds.cache.get("712358618993000499").channels.cache.get("712675195365752892");

    let sugge = args.join(" ");

    if (!args[0]){
        let embed = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('GREY')
            .addField('> :x: | Erreur', '`Utilisation: _sugg [votre suggestion]`')
            .setTimestamp()
            .setFooter('Merlin | Powered by Zoumi#0336');
        return message.channel.send(embed);
    }

    let suggEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .addField(`> Suggestion de ${message.author.tag}`, sugge)
        .setTimestamp()
        .setFooter("Merlin | Powered by Zoumi");

    if (!suggChannel){
        let noChannel = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Erreur", `Le salon \`<#${suggChannel.id}>\` n'existe pas, veuillez prévenir \`Zoumi#0336\``)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(noChannel);
    }
    return suggChannel.send(suggEmbed).then(async em => {
        await em.react("✅");
        await em.react("❌");
    }) && await message.channel.send(`<@${message.author.id}>, votre suggestion à bien été envoyer !`);

};

module.exports.help = {
    name: "sug",
};