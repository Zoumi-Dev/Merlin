const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission(client.admin.clear) || message.author.id === client.config.ownerID) {
        return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission d'utiliser cette commande !`);
    }

    if (!args[0]) {
        let embed = new Discord.MessageEmbed()
            .setAuthor('Merlin')
            .setColor('GREY')
            .addField('> :x: | Erreur', '`Utilisation: _clear [nombre de message]\nPermission requise: MANAGE_MESSAGES`')
            .setTimestamp()
            .setFooter('Merlin | Powered by Zoumi#0336');

        return message.channel.send(embed);
    }

    message.channel.bulkDelete(args[0]).then(() => {
        let clearEmbed = new Discord.MessageEmbed()

            .setAuthor('Merlin')
            .setColor('GREY')
            .addField(`:wastebasket: |`, `J'ai supprimer **${args[0]}** message(s) pour vous !`)
            .setTimestamp()
            .setFooter(`Merlin | Powered by Zoumi#0336`);

        return message.channel.send(clearEmbed).then(message => message.delete({timeout: 5000}));
    });
};