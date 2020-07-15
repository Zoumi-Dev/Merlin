const Discord = require('discord.js');
const msg = [
    "Hmmmm, pas ouf",
    "Peut mieux faire",
    "Digne d'un titan",
    "Photo de profil de qualité :issou:",
];

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(u => u.user.username === args[0]));

    let radomMsg = msg[Math.floor(Math.random() * msg.length)];

    if (!args[0]) {
        if (message) {
            let avatarEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setDescription(`> ${radomMsg}`)
                .setColor("BLUE")
                .setImage(message.author.avatarURL({dynamic: true, size: 4096}))
                .setTimestamp()
                .setFooter(client.config.footer);
            return message.channel.send(avatarEmbed);
        }
    }else {
        if (!usr){
            return message.reply("cette utilisateur n'existe pas.");
        }
        let avatarEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> Waouh qu'elle belle photo de profil **${usr.user.username}**`)
            .setColor("BLUE")
            .setImage(usr.user.avatarURL({dynamic: true, size: 4096}))
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(avatarEmbed);
    }
};

module.exports.help = {
    name: "avatar",
    aliases: ["av"],
    categories: "pratique",
    description: "Permet de voir l'avatar d'une personne ou de vous.",
    usage: "_avatar [utilisateur] ou _avatar",
};