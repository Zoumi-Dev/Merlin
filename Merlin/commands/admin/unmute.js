const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let muteUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get([0])
    );

    if (args < 0){
        let embed = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('BLUE')
            .addField('> :x: | Erreur', `\`Utilisation: ${client.serv["prefix"]}unmute [utilisateur]\nPermission requise: MANAGE_MESSAGES\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);

        return message.channel.send(embed);
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {

        let nopermEmbed = new Discord.MessageEmbed()

            .setAuthor('Merlin')
            .setColor("#FF00FF")
            .addField(`> :x: | Erreur`, `\`Utilisation: ${client.serv["prefix"]}unmute [utilisateur]\nPermission requise: MANAGE_MESSAGES\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);

        return message.channel.send(nopermEmbed);
    }

    if (!muteUser.roles.cache.find(r => r.name === "mute")){
        let noMute = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#FF00FF")
            .addField("> :x: | Erreur", "`Cet utilisateur n'est pas mute !`")
            .setTimestamp()
            .setFooter(`${client.config.footer}`);
        return message.channel.send(noMute);
    }

    let muteRole = message.guild.roles.cache.find(m => m.name === 'mute');

    await muteUser.roles.remove(muteRole.id);

    let succes = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setColor("#FF00FF")
        .setDescription(`> L'utilisateur <@${muteUser.user.id}> peut désormait parler !`)
        .setTimestamp()
        .setFooter(`${client.config.footer}`);
    return message.channel.send(succes);

};

module.exports.help = {
    name: "unmute",
    aliases: ["um"],
    categories: "admin",
    description: "Permet de démute un utilisateur.",
    usage: "=unmute [utilisateur]",
};