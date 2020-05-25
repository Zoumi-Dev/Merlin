const Discord = require('discord.js');
const fs = require('fs');
const categoryList = fs.readdirSync('./commands');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) {
        let helpEmbed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .setDescription(" **__Dernière Ajout | Mise à jour__**\n✦ Modifications de la commande \`_server-infos\`\n✦ Fixe de la commande \`_quest\`")
            .addField("> :newspaper2: | Informations", "`bot-infos`, `server-infos`, `infos`, `ping`", true)
            .addField("> Fun", "`say`, `img`, `cry`, `hug`, `kiss`, `muffins`, `quest`")
            .addField("> :underage: | nsfw", "`anal`, `neko`, `hentai`, `latex`, `ass`, `hot`", true)
            .addField("> :man_police_officer: | Administrative", "`clear`, `ban`, `kick`", true)
            .addField("> :question: | Help", "Vous avez une suggestion ? Alors faite `_sugg`\nmon discord: [[click]](https://discord.gg/7PQUHTr)\nm'inviter: [[click]](https://discord.com/api/oauth2/authorize?client_id=712318774644310057&permissions=8&scope=bot)")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(helpEmbed);
    }else{
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

        const embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .addField("> Commande", `✦ \`${command.help.name}\``, true)
            .addField("> Alias", command.help.aliases ? `✦ \`${command.help.aliases.join(", ")}\`` : `✦ \`Aucune Alias :(\``, true)
            .addField("> Cooldown", command.help.cooldown ? `✦ \`${command.help.cooldown} seconde(s)\`` : `✦ \`5 seconde(s)\``, true)
            .addField("> Description", command.help.description ? `✦ \`${command.help.description}\`` : `✦ \`Aucune Description :(\``, true)
            .addField("> Utilisation", command.help.usage ? `✦ \`${command.help.usage}\`` : `✦ \`Aucun Usage :(\``, true)
            .setTimestamp()
            .setFooter("Merlin | Powred by Zoumi#0336");
        return message.channel.send(embed);
    }
};

module.exports.help = {
    name: "help",
    aliases: ["h"],
    description: "Permet d'afficher le panel d'aide.",
    usage: "_help [commande] ou _help",
};