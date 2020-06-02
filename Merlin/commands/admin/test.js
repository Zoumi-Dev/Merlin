const Discord = require('discord.js');
const ameClient = require('amethyste-api');
const jimp = require('jimp');
const ameApi = new ameClient("ad4c408307abbb8ac2a682e8bc0298c2bc8fb4b09eae443ee95086c2517119b44ba1349c138ba83ea27cbf956e78b849d88e1640b4c5303370f4e67aef8d1040");

module.exports.run = async (client, message, args) => {

    await jimp.read('././img/merlin_pdp.jpg', (err, merlin) => {
        if (err) throw err;
        merlin
            .loadFont(jimp.FONT_SANS_8_WHITE).then(font => {merlin.print(font, 8, 8, "test")})
            .write('././img/merlin_test.jpg');
    })


    /*
    let avatar = `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`;

    let image = await ameApi.generate("wasted", {
        "url": avatar
    }).then(image => {
        console.log(image);
        message.channel.send({
            files: [{
                attachment: image,
                name: "wasted.png",
            }]
        });
    }).catch(err => {
        console.log(err.message);
    });
     */

};

module.exports.help = {
    name: "test",
};