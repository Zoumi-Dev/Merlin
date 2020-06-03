const Discord = require('discord.js');
const fs = require('fs');
const img = new Discord.MessageAttachment('../../img/merlin_help.gif');
const categorieList = fs.readdirSync('././commands');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) {
        let helpEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .setDescription(" **__Dernier Ajout | Mise à jour__**\n✦ La commande \`_lyrics\` prend désormait les chansons à plus de 2048 caractéres !")
            .addField("> :newspaper2: | 『Informations』", "```help, bot-infos, server-infos, infos, mcbe-infos, heberg-infos, invite```", true)
            .addField("> :tada: | 『Fun』", "```say, embed, img, cry, hug, kiss, slap, muffins, quest, dé, bingo, bon```", true)
            .addField("> :wrench: | 『Pratique』", '```rcon, color, lyrics, avatar```')
            .addField("> :underage: | 『Nsfw』", "```anal, neko, hentai, latex, ass, hot```", true)
            .addField("> :man_police_officer: | 『Administrative』", "```clear, ban, kick, mute, unmute```", true)
            .addField("> :gear: | 『Paramètre』", "```SOON```")
            .setImage("https://66.media.tumblr.com/575aa752a70ffbff6267ae3d20843946/tumblr_odub4rgv4f1sg8uefo1_540.gif")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(helpEmbed);
    }else{
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

        const embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .addField("> :tools: | Commande", `✦ \`${command.help.name}\``, true)
            .addField("> :link: | Alias", command.help.aliases ? `✦ \`${command.help.aliases.join(", ")}\`` : `✦ \`Aucune Alias :(\``, true)
            .addField("> :hourglass_flowing_sand: | Cooldown", command.help.cooldown ? `✦ \`${command.help.cooldown} seconde(s)\`` : `✦ \`5 seconde(s)\``, true)
            .addField("> :receipt: | Description", command.help.description ? `✦ \`${command.help.description}\`` : `✦ \`Aucune Description :(\``, true)
            .addField("> :pencil: | Utilisation", command.help.usage ? `✦ \`${command.help.usage}\`` : `✦ \`Aucun Usage :(\``, true)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(embed);
    }
};

module.exports.help = {
    name: "help",
    aliases: ["h"],
    description: "Permet d'afficher le panel d'aide.",
    usage: "_help [commande] ou _help",
};