const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async(client, message, args) => {

    message.delete();

    randomPuppy('cry mangas')
        .then(url => {
            if (!args[0]) {
                let cryEmbed = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setDescription(`> <@${message.author.id}> pleure :cry:`)
                    .setColor("GREEN")
                    .setImage(url)
                    .setTimestamp()
                    .setFooter("Merlin | Powered by Zoumi#0336");
                return message.channel.send(cryEmbed);
            }
        })
};

module.exports.help = {
    name: "cry",
};