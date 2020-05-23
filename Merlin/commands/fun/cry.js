const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = async(client, message, args) => {

    message.delete();

    randomPuppy('cry')
        .then(url => {
            if (!args[0]) {
                let cryEmbed = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setDescription(`> <@${message.author.id}> pleure :cry:`)
                    .setImage(url)
                    .setTimestamp()
                    .setFooter("Merlin | Powered by Zoumi#0336");
                return message.channel.send(cryEmbed);
            }
        })
}