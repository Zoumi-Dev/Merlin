const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    message.delete();

    let usr = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!usr){
        let usrEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Erreur", "`Utilisation: _ddos [utilisateur]`")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return  message.channel.send(usrEmbed);
    }

    return (await (await (await (await message.channel.send(`\`|||||||||||||||||||||\nVictime: ${usr.user.username}\nDDoS en cours: 0%\n∎.........\n|||||||||||||||||||||\``)).edit(`\`|||||||||||||||||||||\nVictime: ${usr.user.username}\nDDoS en cours: 25%\n∎∎∎.......\n|||||||||||||||||||||\``)).edit(`\`|||||||||||||||||||||\nVictime: ${usr.user.username}\nDDoS en cours: 50%\n∎∎∎∎∎.....\n|||||||||||||||||||||\``)).edit(`\`|||||||||||||||||||||\nVictime: ${usr.user.username}\nDDoS en cours: 75%\n∎∎∎∎∎∎∎...\n|||||||||||||||||||||\``)).edit(`\`|||||||||||||||||||||\nVictime: ${usr.user.username}\nDDoS en cours: 100%\n∎∎∎∎∎∎∎∎∎∎\n|||||||||||||||||||||\``)
};

module.exports.help = {
    name: "ddos",
};