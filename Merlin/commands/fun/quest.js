const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete();

    let reponse = ["oui", "non", "peut-être", "peut-être que oui", "peut-être que non", "je sais pas"];

    let randomReponse = reponse[Math.floor(Math.random() * reponse.length)];

    if (!args[0]){
        let embed = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('GREEN')
            .addField('> :x: | Erreur', '`Utilisation: _quest [question]`')
            .setTimestamp()
            .setFooter(client.config.footer);

        return message.channel.send(embed);
    }

    let repEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("GREEN")
        .setDescription(`> :question: | Question posé par <@${message.author.id}>`)
        .addField("> :inbox_tray: | Question", args.join(' '))
        .addField("> :outbox_tray: | Réponse", randomReponse)
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(repEmbed);

};

module.exports.help = {
    name: "quest",
    aliases: ["8ball"],
};