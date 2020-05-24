const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]){
        return message.channel.send(`<@${message.author.id}>, veuillez specifier une couleur ! Exemple: ${client.config.DEFAULT_SETTINGS.prefix}color GREY.`)
    }else{
        let color = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> Voici la couleur ${args[0]}`)
            .setColor(args[0])
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(color)
    }

};

module.exports.help = {
    name: "color",
};