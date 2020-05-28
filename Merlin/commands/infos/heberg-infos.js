const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let hebergEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setDescription("> Nous sommes en aucun cas en partenariat avec [inovaPerf](https://inovaperf.fr)")
        .addField(
            "> :question: | Inova ? C'est quoi ?",
            "la desc de inova"
        )
        .addField(
            "> :shopping_bags: | Offre actuel pour le bot",
            "✦ Vps __**NVME**__\n" +
            "✦ __**2**__ vCPU xeon E5\n" +
            "✦ __**4**__ Go de RAM\n" +
            "✦ __**30**__ Go de stockage SSD\n" +
            "✦ __**200**__ Mbps (Bande Passante)"
        )
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(hebergEmbed);

};

module.exports.help = {
    name: "heberg-infos",
    aliases: ["hi"],
    description: "Permet de voir les informations sur l'heberger du bot.",
    usage: "_heberg-infos",
};