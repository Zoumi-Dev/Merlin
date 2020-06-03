const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    message.delete();

    let muteUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get([0])
    );

    let raison = args.slice(2).join(" ");

    if (!muteUser){
        let embed = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('BLUE')
            .addField('> :x: | Erreur', '`Utilisation: _mute [utilisateur] [temps (d => jour, h => heure, m => minute)] [reason]\nPermission requise: MANAGE_MESSAGES`')
            .setTimestamp()
            .setFooter(`${client.config.footer}`);

        return message.channel.send(embed);
    }

    if (args < 2) {
        let embed = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('BLUE')
            .addField('> :x: | Erreur', '`Utilisation: _mute [utilisateur] [temps (d => jour, h => heure, m => minute)] [reason]\nPermission requise: MANAGE_MESSAGES`')
            .setTimestamp()
            .setFooter(`${client.config.footer}`);

        return message.channel.send(embed);
    }

    if (muteUser.hasPermission("MANAGE_MESSAGES")){
        let havePerm = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor("#FF00FF")
            .addField('> :x: | Erreur', '`Utilisation: _mute [utilisateur] [temps (d => jour, h => heure, m => minute)] [reason]\nPermission requise: MANAGE_MESSAGES`')
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(havePerm);
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        let nopermEmbed = new Discord.MessageEmbed()

            .setAuthor('Merlin')
            .setColor("#FF00FF")
            .addField(`> :x: | Erreur`, "`Utilisation: _mute [utilisateur] [temps (d => jour, h => heure, m => minute)] [reason]\nPermission requise: MANAGE_MESSAGES`")
            .setTimestamp()
            .setFooter(`${client.config.footer}`);

        return message.channel.send(nopermEmbed);
    }

    let muteRole = message.guild.roles.cache.find(m => m.name === 'mute');

    if (!muteRole){
        try{
            muteRole = await message.guild.roles.create({
                data: {
                    name: "mute",

                    color: "BLACK",

                    permissions: [],
                }
            });
            await message.guild.channels.cache.forEach((channel) => {
                channel.updateOverwrite(muteRole.id, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    CONNECT: false,
                })
            })
        } catch (e) {
            console.log(e.stack);
        }
    }setTimeout(() => {

        muteUser.roles.remove(muteRole.id);
        let timeout = new Discord.MessageEmbed()

            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .setDescription(`> Le mute de <@${muteUser.user.id}> à expiré, il peut désormait parler !`)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);

        return message.channel.send(timeout);
    }, ms(args[1]));
    await muteUser.roles.add(muteRole.id);

    let muteEmbed = new Discord.MessageEmbed()
        .setAuthor('Merlin')
        .setColor('#FF00FF')
        .setDescription(`> :white_check_mark: | L'utilisateur <@${muteUser.user.id}> est désormait réduit en silence pendant \`${args[1]}\` pour la raison \`${raison}\``)
        .setTimestamp()
        .setFooter(`${client.config.footer}`);
    return message.channel.send(muteEmbed);

};

module.exports.help = {
    name: "mute",
    aliases: ["m"],
    categories: "admin",
    description: "Permet de mute un utilisateur pendant un certain temps.",
    usage: "_mute [utilisateur] [temps (d => jour, h => heure, m => minute)] [reason]",
};