const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const { channel } = message.guild.member(client.user.id).voice;

    if (!channel){
        let notinChannel = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .addField(`${client.emojis.cache.find(e => e.id === client.emo.kawai)} | Error`, "Vous devez être dans le même salon vocal du bot pour le déconnecter !")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(notinChannel);
    }

    if (client.config.ownerID.includes(message.author.id)){
        channel.leave();
        client.queue.delete(message.guild.id);

        let succes = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .addField(`${client.emojis.cache.find(e => e.id === client.emo.dab)} | Succès`, "Le bot a quitter le salon vocal avec succès !")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(succes);
    }

    if (!message.member.roles.cache.find(r => r.name.toLowerCase() === "dj")){
        let notDj = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("RED")
            .addField(`${client.emojis.cache.find(e => e.id === client.emo.kawai)} | Erreur`, `Vous devez être \`dj\` pour pouvoir effectuer cette commande.\nInformations: si le rôle \`dj\` n'existe pas veuillez le créer !`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(notDj);
    }

    channel.leave();
    client.queue.delete(message.guild.id);

    let succes = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("RED")
        .addField(`${client.emojis.cache.find(e => e.id === client.emo.dab)} | Succès`, "Le bot a quitter le salon vocal avec succès !")
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(succes);

};

module.exports.help = {
    name: "leave",
    aliases: ["disconnect"],
    categories: "musique",
};