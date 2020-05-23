const Discrord = require('discord.js');
const neko = [
    "https://i.pinimg.com/236x/6c/ca/b8/6ccab8749673e07d515cc49012a1a8f1--anime-girls-kitty.jpg",
    "https://dzt1km7tv28ex.cloudfront.net/u/426346577527832576_35s_d.jpg",
    "https://thumb-p3.xhcdn.com/a/kGkPHXJKQD-UYrqG-3vV9g/000/051/248/303_450.jpg",
    "https://pbs.twimg.com/media/DtNvBfCVAAATRsu.jpg",
    "https://pbs.twimg.com/media/DXyDKhgW0AEIWEn.jpg",
    "https://i1.yuki.la/5/7e/a48a733f9bb9e644ccf09b531ac44ac6157d72307266ec7a1e2cf3c30ac257e5.jpg",
    "https://i.pinimg.com/originals/1b/d6/3f/1bd63f3428721d7a7a195b02e3e06ca8.png",
    "https://xfr.fr/wp-content/uploads/hentai-XFR-1.gif",

];

module.exports.run = async (client, message, args) => {

    const imgneko = neko[Math.floor(Math.random() * neko.length)];

    if (message.channel.nsfw === true){
        let nekoEmbed = new Discrord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .setDescription(`> \`Neko\` demandée par \`${message.author.username}\``)
            .setImage(imgneko)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(nekoEmbed);
    }else{
        return message.channel.send(`<@${message.author.id}>, cette commande est disponible uniquement dans les salons nsfw !`);
    }
};

module.exports.help = {
    name: "neko",
};