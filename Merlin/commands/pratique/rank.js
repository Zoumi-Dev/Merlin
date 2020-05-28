const Discord = require('discord.js');
const jimp = require('jimp');

module.exports.run = async (client, message, args) => {

    message.delete();

    jimp.read('././img/merlin_help.gif', (err, merlin) => {
        if (err) return message.channel.send(err.message);
        merlin
            .resize(256, 256)
            .quality(60)
            .write('././merlin_rank.gif')
    }).catch(err => {
        console.error(err);
    });

};

module.exports.help = {
    name: "rank",
    description: "Permet de voir ça progression de niveau",
    usage: "_rank ou _rank [utilisateur]"
};