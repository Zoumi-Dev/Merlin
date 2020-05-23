const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!args[0]) {
        let avatarEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> Voici l'avatar de <@${message.author.id}>`)
            .setColor("GREY")
            .setImage(message.author.avatarURL())
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(avatarEmbed);
    }else{
        if (args[0] === usr){
            let avatarEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setDescription(`> Voici l'avatar de <@${message.author.id}>`)
                .setColor("GREY")
                .setImage(usr.user.avatarURL())
                .setTimestamp()
                .setFooter("Merlin | Powered by Zoumi#0336");
            return message.channel.send(avatarEmbed);
        }
    }
};

module.exports.help = {
    name: "avatar",
    aliases: ["av"]
};