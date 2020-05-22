const Discord = require('discord.js');
const cryimg = [
    "https://media.giphy.com/media/oS4LjGIpwuE1O/giphy.gif",
    "https://media.giphy.com/media/59d1zo8SUSaUU/giphy.gif",
    "https://media.giphy.com/media/Xqlsn2kLPBquI/giphy.gif",
    "https://media.giphy.com/media/Ui7MfO6OaLz4k/giphy.gif",
    "https://media.giphy.com/media/8YutMatqkTfSE/giphy.gif",
    "https://media.giphy.com/media/mvRwcoCJ9kGTS/giphy.gif",
];

exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let cry = cryimg[Math.floor(Math.random() * cryimg.length)];

    if (!args[0]) {
        let cryEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> <@${message.author.id}> pleure :cry:`)
            .setImage(cry)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(cryEmbed);
    }
};