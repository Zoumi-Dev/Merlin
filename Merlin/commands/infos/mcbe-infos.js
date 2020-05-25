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

    try {
        libquery.query(args[0], args[1]).then((data) => {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("BLUE")
                .setDescription(`> Voici les informations du serveur \`${data.host}\``)
                .addField("> Port", `✦ ${data.port}`)
                .addField("> Version", `✦ ${data.version}`)
                .addField("> Motd", `✦ ${data.motd}`)
                .addField("> Joueur(s) en ligne", `✦ ${data.online}/${data.max}`)
                .addField("> Map(s)", `✦ ${data.map}`)
                .addField("> Plugin(s)", `✦ ${data.plugins}`)
                .setTimestamp()
                .setFooter("Merlin | Powered by Zoumi#0336");
            return message.channel.send(embed);
        });
    } catch(e){
        return message.channel.send(e.message, {code: "js"});
    }

};

module.exports.help = {
    name: "mcbe-infos",
    aliases: [""],
    description: "Permet de voir les informations d'un serveur Minecraft Bedrock Edition",
    usage: "_mcbe-infos [ip] [port]",
};