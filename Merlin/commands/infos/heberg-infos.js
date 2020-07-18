const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let hebergEmbed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setDescription("> *Nous sommes en aucun cas en partenariat avec [PulseHeberg](https://www.pulseheberg.com/)*")
        .addField(
            "> :shopping_bags: | Offre actuel pour le bot",
            "✦ Vps __**KVM**__\n" +
            "✦ __**8**__ vCORE\n" +
            "✦ __**8**__ Go de RAM (DDR4)\n" +
            "✦ __**50**__ Go RAID 10\n" +
            "✦ __**500**__ Mbps (Bande Passante)"
        )
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(hebergEmbed);

};

module.exports.help = {
    name: "heberg-infos",
    aliases: ["hi"],
    categories: "infos",
    description: "Permet de voir les informations sur l'heberger du bot.",
    usage: "_heberg-infos",
};