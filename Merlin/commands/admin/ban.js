const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let banUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );

    let reason = args.slice(2).join(' ');

    let pleure = message.guild.emojis.cache.find(e => e.name === 'pleure');

    if (!message.member.hasPermission('BAN_MEMBERS')){
        let noPerm = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}ban [utilisateur] [raison]\nPermission requise: BAN_MEMBERS\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noPerm);
    }

    if (!args[0]){
        let noMen = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField(':x: | Erreur', `\`Utilisation: ${client.serv["prefix"]}ban [utilisateur] [raison]\nPermission requise: BAN_MEMBERS\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noMen);
    }

    if (banUser.hasPermission('BAN_MEMBERS')){
        let havePerm = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField("> :x: | Erreur", `\`Vous ne pouvez pas bannir une personne ayant la permission BAN_MEMBERS.\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(havePerm).then(async m =>{
            await m.react(pleure);
        });
    }

    if (!args[1]){
        let noMen = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField('> :x: | Erreur', `\`Utilisation: ${client.serv["prefix"]}ban [utilisateur] [raison]\nPermission requise: BAN_MEMBERS\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noMen);
    }

    let mpEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField("> :exclamation: | Ban", `\`Vous avez été bannie du serveur \`${message.guild.name}\` pour la raison \`${reason}\`.\``)
        .setTimestamp()
        .setFooter(`${client.config.footer}`);

    let banEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .addField("> :white_check_mark: | Succès", `\`Le membre \`<@${banUser.user.id}>\` à été bannie avec succès !\nRaison: \`${reason}`)
        .setTimestamp()
        .setFooter(`${client.config.footer}`);
    return message.channel.send(banEmbed) && banUser.ban({days: 7, reason: reason}) && banUser.user.send(mpEmbed);
};

module.exports.help = {
    name: "ban",
    categories: "admin",
    description: "Permet de bannir un utilisateur avec une raison.",
    usage: "=ban [utilisateur] [raison]",
};