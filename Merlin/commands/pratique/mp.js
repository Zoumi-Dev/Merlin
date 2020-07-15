const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let msg = args.slice(1).join(' ');

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(u => u.user.username === args[0]));

    if (!usr){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Error", `\`Utilisation: ${client.serv["prefix"]}mp [utilisateur] [message]\``)
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    if (!msg) {
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Error", `\`Utilisation: ${client.serv["prefix"]}mp [utilisateur] [message]\``)
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    await usr.send(msg);

    return message.reply("message envoyé !").then(message => message.delete({timeout: 5000}));

}

module.exports.help = {
    name: "mp",
    categories: "pratique",
    cooldown: 15,
}