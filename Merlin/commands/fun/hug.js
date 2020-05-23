const Discord = require('discord.js');
const hugimg = [
    "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
    "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
    "https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif",
    "https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif",
    "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
    "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
    "https://media.giphy.com/media/JLovyTOWK4cuc/giphy.gif",
    "https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif",
];

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let hug = hugimg[Math.floor(Math.random() * hugimg.length)];

    if (!args[0]) {
        let hugEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> <@${message.author.id}> a fait un câlin à <@${client.user.id}> :hugging:`)
            .setImage(hug)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(hugEmbed);
    }else{
        if (usr){
            let hugEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setDescription(`> <@${message.author.id}> a fait un câlin à <@${usr.user.id}> :hugging:`)
                .setImage(hug)
                .setTimestamp()
                .setFooter("Merlin | Powered by Zoumi#0336");
            return message.channel.send(hugEmbed);
        }
    }
};

module.exports.help = {
    name: "hug",
};