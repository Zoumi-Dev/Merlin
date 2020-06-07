const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    var gif = await fetch("https://nekos.life/api/v2/img/slap")
        .then(res => res.json())
        .then(json => json.url);

    if (!args[0]) {
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .setDescription(`> <@${message.author.id}> a foutu une tarte à <@${client.user.id}>`)
            .setImage(gif)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(embed);
    }else{
        if (usr){
            let embed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("GREEN")
                .setDescription(`> <@${message.author.id}> a foutue une tarte à <@${usr.user.id}>`)
                .setImage(gif)
                .setTimestamp()
                .setFooter(client.config.footer);
            return message.channel.send(embed);
        }
    }
};

module.exports.help = {
    name: "slap",
    categories: "fun",
    usage: "_slap ou _slap [utilisateur]",
};