const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let html = client.emojis.cache.find(e => e.name === "html");

    let js = client.emojis.cache.find(e => e.name === "js");

    let php = client.emojis.cache.find(e => e.name === "php");

    if (!client.config.ownerID.includes(message.author.id)){
        return message.reply("vous n'avez pas la permission d'utiliser cett commande. " + `<:pleure:${client.emo.pleure}>`);
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setDescription(`> Reaction rôle !\n\n${html} \`HTML/CSS\`\n${js} \`JavaScript\`\n${php} \`Hypertext Preprocessor\`\n\n__**Clique sur une des réactions ci-dessous pour obtenir ce rôle !**__`)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed).then(async e => {
        await e.react(html);
        await e.react(js);
        await e.react(php);
    });

};

module.exports.help = {
    name: "setup",
    categories: "owner",
};