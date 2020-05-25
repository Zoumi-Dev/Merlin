const Discord = require('discord.js');
const kissimg = [
    "https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif",
    "https://media.giphy.com/media/lBGj9wHG59Xr2/giphy.gif",
    "https://media.giphy.com/media/AZSjToDmW19WU/giphy.gif",
    "https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif",
    "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
    "https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif",
    "https://media.giphy.com/media/iseq9MQgxo4aQ/giphy.gif",
    "https://media.giphy.com/media/H8XZI3PJm258c/giphy.gif",
    "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
    "https://media.giphy.com/media/1wmtU5YhqqDKg/giphy.gif",
];

module.exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let kiss = kissimg[Math.floor(Math.random() * kissimg.length)];

    if (!args[0]) {
        let kissEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> <@${message.author.id}> a embrassé <@${client.user.id}> :heart:`)
            .setColor("GREEN")
            .setImage(kiss)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(kissEmbed);
    }else{
        if (usr){
            let kissEmbed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setDescription(`> <@${message.author.id}> a embrassé <@${usr.user.id}> :heart:`)
                .setImage(kiss)
                .setTimestamp()
                .setFooter("Merlin | Powered by Zoumi#0336");
            return message.channel.send(kissEmbed);
        }
    }

};

module.exports.help = {
    name: "kiss",
};