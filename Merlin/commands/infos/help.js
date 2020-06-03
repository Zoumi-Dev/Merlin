const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) {
        let helpEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .addField(`> :newspaper2: | 『Informations(${client.commands.filter(cat => cat.help.categories === "infos").map(cmd => cmd.help.name).length})』`, `\`\`\`${client.commands.filter(cat => cat.help.categories === "infos").map(cmd => cmd.help.name).join(", ")}\`\`\``, true)
            .addField(`> :tada: | 『Fun(${client.commands.filter(cat => cat.help.categories === "fun").map(cmd => cmd.help.name).length})』`, `\`\`\`${client.commands.filter(cat => cat.help.categories === "fun").map(cmd => cmd.help.name).join(", ")}\`\`\``, true)
            .addField(`> :wrench: | 『Pratique(${client.commands.filter(cat => cat.help.categories === "pratique").map(cmd => cmd.help.name).length})』`, `\`\`\`${client.commands.filter(cat => cat.help.categories === "pratique").map(cmd => cmd.help.name).join(", ")}\`\`\``)
            .addField(`> :underage: | 『Nsfw(${client.commands.filter(cat => cat.help.categories === "nsfw").map(cmd => cmd.help.name).length})』`, `\`\`\`${client.commands.filter(cat => cat.help.categories === "nsfw").map(cmd => cmd.help.name).join(", ")}\`\`\``, true)
            .addField(`> :man_police_officer: | 『Administrative(${client.commands.filter(cat => cat.help.categories === "admin").map(cmd => cmd.help.name).length})』`, `\`\`\`${client.commands.filter(cat => cat.help.categories === "admin").map(cmd => cmd.help.name).join(", ")}\`\`\``, true)
            .addField(`> :gear: | 『Paramètre(${client.commands.filter(cat => cat.help.categories === "settings").map(cmd => cmd.help.name).length})』`, "```SOON```")
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
    categories: "infos",
    description: "Permet d'afficher le panel d'aide.",
    usage: "_help [commande] ou _help",
};