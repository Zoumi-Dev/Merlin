const Discord = require('discord.js');
const jimp = require('jimp');

module.exports.run = async (client, message, args) => {

    /*
    await jimp.read('././img/merlin_pdp.jpg', (err, merlin) => {
        if (err) throw err;
        merlin
            .quality(100)
            .circle()
            .write('././img/merlin_test.jpg');
    })
    */

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("BLUE")
        .setDescription("description <= ajout des new commande etc...")
        .addField("> :newspaper2: | 『Informations』", "```help, server-infos```", true)
        .addField("> :newspaper2: | 『Informations』", "```help, server-infos```", true)
        .addField("> :newspaper2: | 『Informations』", "```help, server-infos```")
        .addField("> :newspaper2: | 『Informations』", "```help, server-infos```", true)
        .addField("> :newspaper2: | 『Informations』", "```help, server-infos```", true)
        .setImage("https://66.media.tumblr.com/575aa752a70ffbff6267ae3d20843946/tumblr_odub4rgv4f1sg8uefo1_540.gif")
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);
};

module.exports.help = {
    name: "test",
};