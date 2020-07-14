const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const queue = message.client.queue.get(message.guild.id);

    let nextVolume = args[0];

    if (queue){
        if (isNaN(nextVolume)){
            let notNumber = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("RED")
                .addField(`${client.emojis.cache.find(e => e.id === client.emo.kawai)} | Erreur`, `l'argument 1 doit-être un nombre !`)
                .setTimestamp()
                .setFooter(client.config.footer);
            return message.channel.send(notNumber);
        }else{
            if (nextVolume >= 101){
                let notAvaible = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setColor("RED")
                    .addField(`${client.emojis.cache.find(e => e.id === client.emo.kawai)} | Erreur`, `Le volume ne peut aller jusqu'a plus de **100%**.`)
                    .setTimestamp()
                    .setFooter(client.config.footer);
                return message.channel.send(notAvaible);
            }
            let succes = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("RED")
                .addField(`${client.emojis.cache.find(e => e.id === client.emo.dab)} | Succès`, `Le volume est désormais à **${nextVolume}%**.`)
                .setTimestamp()
                .setFooter(client.config.footer);
            message.channel.send(succes);
            queue.connection.dispatcher.setVolumeLogarithmic(nextVolume / 100);
        }
    }else{
        let noMusique = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .addField(`${client.emojis.cache.find(e => e.id === client.emo.kawai)} | Erreur`, `Aucune musique en cours...`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noMusique);
    }

};

module.exports.help = {
    name: "volume",
    categories: "musique",
};