const Discrord = require('discord.js');
const latex = [
    "https://www.barnorama.com/wp-content/uploads/2019/09/Latex-Girls-2.jpg",
    "https://www.stylevore.com/wp-content/uploads/2020/02/82864185_2576359089243388_5964689802891996688_n.jpg",
    "https://cdn.acidcow.com/pics/20190813/1565720535_3ristk289s.jpg",
    "https://breakbrunch.com/wp-content/uploads/2019/08/hot-girl-in-latex-071319-11.jpg",
    "https://i.pinimg.com/originals/15/b3/ab/15b3abf07a7b1893645e2672caa81dcb.jpg",
    "https://i.pinimg.com/originals/ef/09/bd/ef09bdf3563cc5c9f229007af86dfa24.jpg",

];

module.exports.run = async (client, message, args) => {

    const imghot = latex[Math.floor(Math.random() * latex.length)];

    if (message.channel.nsfw === true){
        let latexEmbed = new Discrord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .setDescription(`> \`Latex\` demandée par \`${message.author.username}\``)
            .setImage(imghot)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(latexEmbed);
    }else{
        return message.channel.send(`<@${message.author.id}>, cette commande est disponible uniquement dans les salons nsfw !`);
    }
};

module.exports.help = {
    name: "latex",
};