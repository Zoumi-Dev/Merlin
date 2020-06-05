const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    message.delete();

    let rappel = args.slice(1).join(" ");

    if (args < 1){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Erreur", "`Utilisation: _rappel [temps] [message]`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    } setTimeout(() => {
        message.guild.member(message.author.id).send(`${client.emojis.cache.find(e => e.id === client.emo.kawai)} | Rappel: ${rappel}`);
    }, ms(args[0]));

    let rappelEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREY")
        .setDescription(`> <@${message.author.id}>, je vous rappellerai dans \`${args[0]}\` pour la raison \`${rappel}\``)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(rappelEmbed);
};

module.exports.help = {
    name: "rappel",
    aliases: ["rpl"],
    categories: "pratique",
};