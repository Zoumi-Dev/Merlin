const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let kickUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );

    let reason = args.join(' ').slice(args[2]);

    let pleure = client.emojis.cache.find(e => e.id === client.emo.pleure);

    if (!message.member.hasPermission('KICK_MEMBERS')){
        let noPerm = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField("> :x: | Erreur", `\`Utilisation: ${client.config.DEFAULT_SETTINGS.prefix}kick [utilisateur] [raison]\nPermission requise: KICK_MEMBERS\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noPerm).then(e => e.react(pleure));
    }

    if (!args[0]){
        let noMen = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField(':x: | Erreur', `\`Utilisation: ${client.config.prefix}kick [utilisateur] [raison]\nPermission requise: KICK_MEMBERS\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noMen).then(e => e.react(pleure));
    }

    if (kickUser.hasPermission('KICK_MEMBERS')){
        let havePerm = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField("> :x: | Erreur", `\`Vous ne pouvez pas bannir une personne ayant la permission KICK_MEMBERS.\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(havePerm).then(async m => {
            await m.react(pleure)});
    }

    if (!args[1]){
        let noMen = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField('> :x: | Erreur', `\`Utilisation: ${client.config.prefix}kick [utilisateur] [raison]\nPermission requise: KICK_MEMBERS\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noMen).then(e => e.react(pleure));
    }

    let mpEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField("> :exclamation: | Kick", `\`Vous avez été kick du serveur \`${message.guild.name}\` pour la raison \`${reason}\`.\``)
        .setTimestamp()
        .setFooter(`${client.config.footer}`);

    let kickEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField("> :white_check_mark: | Succès", `\`Le membre \`<@${kickUser.user.id}>\` à été kick avec succès !\nRaison: \`${reason}`)
        .setTimestamp()
        .setFooter(`${client.config.footer}`);
    return message.channel.send(kickEmbed) && kickUser.kick(reason) && kickUser.user.send(mpEmbed);
};

module.exports.help = {
    name: "kick",
    description: "Permet de kick un utilisateur avec une raison.",
    usage: "_kick [utilisateur] [raison]",
};