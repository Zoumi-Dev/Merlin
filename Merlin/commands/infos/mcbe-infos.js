const libquery = require('libquery');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (args < 1){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .addField("> :x: | Erreur", "`Utilisation: _mcbe-infos [ip] [port]`")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(noargs);
    }

    let embed = new Discord.MessageEmbed();
    libquery.query(args[0], args[1]).then((data) => {
        embed.setAuthor("Merlin");
        embed.setColor("BLUE");
        embed.setDescription(`> Voici les informations du serveur \`${data.host}\``);
        embed.addField("> Port", `✦ ${data.port}`);
        embed.addField("> Version", `✦ ${data.version}`);
        embed.addField("> Motd", `✦ ${data.motd}`);
        embed.addField("> Joueur(s) en ligne", `✦ ${data.online}/${data.max}`);
        embed.addField("> Map(s)", `✦ ${data.map}`);
        embed.addField("> Plugin(s)", `✦ ${data.plugins}`);
        embed.setTimestamp();
        embed.setFooter("Merlin | Powered by Zoumi#0336");
    });

    return message.channel.send(embed);

};

module.exports.help = {
    name: "mcbe-infos",
    aliases: [""],
    description: "Permet de voir les informations d'un serveur Minecraft Bedrock Edition",
    usage: "_mcbe-infos [ip] [port]",
};