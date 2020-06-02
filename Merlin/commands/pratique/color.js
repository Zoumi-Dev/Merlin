const Discord = require('discord.js');
const tinycolor = require('tinycolor2');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]){
        return message.channel.send(`<@${message.author.id}>, veuillez specifier une couleur ! Exemple: ${client.config.DEFAULT_SETTINGS.prefix}color GREY.`)
    }else{

        let color = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setDescription(`> Voici la couleur ${args[0]}`)
            .setColor(args[0])
            .addField("> Format", `${tinycolor(args[0]).getFormat()}`)
            .addField("> Hex", `${tinycolor(args[0]).toHexString()}`)
            .addField("> Rgb", `${tinycolor(args[0]).toRgbString()}`)
            .addField("> Nom", `${tinycolor(args[0]).toName()}`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(color);
    }

};

module.exports.help = {
    name: "color",
};