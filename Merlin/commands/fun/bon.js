const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]){
        return message.reply("veuillez faire _bon [message] [couleur]");
    }

    if (!args[1]){
        return message.reply("veuillez faire _bon [message] [couleur]");
    }

    let bonEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setDescription(`> Si vous souhaitez télécharger l'image cliqué [[ici]](https://bonapi.seyz.wtf/api/create/download/bontoutou/?name=${args[0]}&colors=${args[1]}). __**Informations**__ le caractère \`_\` simule un espace.`)
        .setImage(`https://bonapi.seyz.wtf/api/create/bontoutou/?name=${args[0]}&colors=${args[1]}`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(bonEmbed);

};

module.exports.help = {
    name: "bon",
    categories: "fun",
};