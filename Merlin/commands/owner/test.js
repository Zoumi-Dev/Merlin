const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (client, message, args) => {

    Canvas.registerFont('././txt/Anton-Regular.ttf', {
        family: "nike",
    });
    const canvas = Canvas.createCanvas(540, 260);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("././img/logo_nike.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '100px "nike"';
    ctx.fillStyle = "#000";
    ctx.fillText(`${args.join(" ")}`, 230, 160);
    ctx.quality = "best";


    const attachement = new Discord.MessageAttachment(canvas.toBuffer(), `nike-${args.join("-")}.png`);

    await message.channel.send(attachement);

};

module.exports.help = {
    name: "test"
};