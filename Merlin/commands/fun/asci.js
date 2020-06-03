const asci = require('ascii-art');
const canvas = require('canvas');

module.exports.run = async (client, message, args) => {

    message.delete();

    const ctx = await canvas.createCanvas(200, 200);
    const img = ctx.getContext('2d');

    img.font = '30px Impact';
    img.fillText("LOL", 50, 100);
    img.stroke();
    await canvas.loadImage('././img/merlin_pdp.jpg', (image, err) => {
        if (err) return message.channel.send(err.message);
        img.drawImage(image, 50, 0, 70, 70);
        return message.channel.send(ctx.toDataURL());
    });
};

module.exports.help = {
    name: "asci",
};