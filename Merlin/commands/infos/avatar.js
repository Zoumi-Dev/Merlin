const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!args[0]) {
        let avatarEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> Voici l'avatar de <@${message.author.id}>`)
            .setColor("BLUE")
            .setImage(message.author.displayAvatarURL())
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(avatarEmbed);
    }else{
        if (args[0] === usr){
            let avatarEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setDescription(`> Voici l'avatar de <@${message.author.id}>`)
                .setColor("GREY")
                .setImage(usr.user.displayAvatarURL())
                .setTimestamp()
                .setFooter(client.config.footer);
            return message.channel.send(avatarEmbed);
        }
    }
};

module.exports.help = {
    name: "avatar",
    aliases: ["av"],
    description: "Permet de voir l'avatar d'une personne ou de vous.",
    usage: "_avatar [utilisateur] ou _avatar",
};