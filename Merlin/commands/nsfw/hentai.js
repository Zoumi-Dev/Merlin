const Discrord = require('discord.js');
const fetch = require('node-fetch');
const hentai = [
    "https://claravenger.com/wp-content/uploads/2018/12/gifs-hentai-24.gif",
    "https://sexwall.me/wp-content/uploads/2014/09/hentai-pinkette-fucked.gif",
    "https://verhentai.org/wp-content/uploads/2019/06/hentai-gif-4.gif",

];

module.exports.run = async (client, message, args) => {

    /*
    const imghentai = hentai[Math.floor(Math.random() * hentai.length)];
     */

    var gif = await fetch("https://nekos.life/api/v2/img/hentai")
        .then(res => res.json())
        .then(json => json.url)

    if (message.channel.nsfw === true){
        let hentaiEmbed = new Discrord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .setDescription(`> \`hentai\` demandée par \`${message.author.username}\``)
            .setImage(gif)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(hentaiEmbed);
    }else{
        return message.channel.send(`<@${message.author.id}>, cette commande est disponible uniquement dans les salons nsfw !`);
    }
};

module.exports.help = {
    name: "hentai",
    categories: "nsfw",
};