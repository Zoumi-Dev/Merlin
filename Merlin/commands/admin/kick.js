const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let kickUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );

    let reason = args.join(' ');

    let pleure = message.guild.emojis.cache.find(e => e.name === 'pleure');

    if (!message.member.hasPermission('KICK_MEMBERS')){
        let noPerm = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField("> :x: | Erreur", `\`Utilisation: ${client.config.DEFAULT_SETTINGS.prefix}kick [utilisateur] [raison]\nPermission requise: KICK_MEMBERS\``)
            .setTimestamp()
            .setFooter('Merlin | Powered by Zoumi#0336');
        return message.channel.send(noPerm);
    }

    if (!args[0]){
        let noMen = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField(':x: | Erreur', `\`Utilisation: ${client.config.prefix}kick [utilisateur] [raison]\nPermission requise: KICK_MEMBERS\``)
            .setTimestamp()
            .setFooter('Merlin | Powered by Zoumi#0336');
        return message.channel.send(noMen);
    }

    if (kickUser.hasPermission('KICK_MEMBERS')){
        let havePerm = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField("> :x: | Erreur", `\`Vous ne pouvez pas bannir une personne ayant la permission KICK_MEMBERS.\``)
            .setTimestamp()
            .setFooter('Merlin | Powered by Zoumi#0336');
        return message.channel.send(havePerm).then(async m =>{
            await m.react(pleure);
        });
    }

    if (!args[1]){
        let noMen = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField('> :x: | Erreur', `\`Utilisation: ${client.config.prefix}kick [utilisateur] [raison]\nPermission requise: KICK_MEMBERS\``)
            .setTimestamp()
            .setFooter('Merlin | Powered by Zoumi#0336');
        return message.channel.send(noMen);
    }

    let mpEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField("> :exclamation: | Kick", `\`Vous avez été kick du serveur \`${message.guild.name}\` pour la raison \`${reason}\`.\``);

    let kickEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField("> :white_check_mark: | Succès", `\`Le membre \`<@${kickUser.user.id}>\` à été kick avec succès !\nRaison: \`${reason}`)
        .setTimestamp()
        .setFooter('Merlin | Powered by Zoumi#0336');
    return message.channel.send(kickEmbed) && kickUser.kick(reason) && kickUser.user.send(mpEmbed);
};

module.exports.help = {
    name: "kick",
};