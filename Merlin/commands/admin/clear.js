const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission(client.admin.clear) || message.author.id === client.config.ownerID) {
        return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission d'utiliser cette commande !`);
    }

    if (!args[0]) {
        let embed = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField('> :x: | Erreur', `\`Utilisation: ${client.serv["prefix"]}clear [nombre de message]\nPermission requise: MANAGE_MESSAGES\``)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);

        return message.channel.send(embed);
    }

    message.channel.bulkDelete(args[0]).then(() => {
        let clearEmbed = new Discord.MessageEmbed()

            .setAuthor('Merlin')
            .setColor('#FF00FF')
            .addField(`:wastebasket: | Suppresion de message`, `J'ai supprimer **${args[0]}** message(s) pour vous !`)
            .setTimestamp()
            .setFooter(`${client.config.footer}`);

        return message.channel.send(clearEmbed).then(message => message.delete({timeout: 5000}));
    });
};

module.exports.help = {
    name: "clear",
    categories: "admin",
    description: "Permet de supprimer plusieur message.",
    usage: "=clear [nombre de message] ATTENTION une limite de 100 messages par utilisation.",
};