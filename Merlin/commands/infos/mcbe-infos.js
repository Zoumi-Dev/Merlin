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

    libquery.query(args[0], args[1]).then((data) => {
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .setDescription(`> Voici les informations du serveur \`${args[0]}\``)
            .addField("> Port", `✦ ${data.port}`)
            .addField("> Version", `✦ ${data.version}`)
            .addField("> Motd", `✦ ${data.motd}`)
            .addField("> Joueur(s) en ligne", `✦ ${data.online}/${data.max}`)
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(embed).catch(e => { return message.channel.send(e.message, {code: "php"}) }) && message.channel.send((`> Map(s)\n\`\`\`${data.map}\`\`\``)) && message.channel.send((`> Plugin(s)\n\`\`\`${data.plugins}\`\`\``));
    }).catch(e => { console.log(e.message)});

};

module.exports.help = {
    name: "mcbe-infos",
    aliases: ["mi"],
    description: "Permet de voir les informations d'un serveur Minecraft Bedrock Edition",
    usage: "_mcbe-infos [ip] [port]",
    cooldown: 10,
};