const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    message.delete();

    if (message.author.id !== client.config.zoumi){
        let noPerm = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :x: | Erreur", "`Vous n'avez pas la permission requise pour utiliser cette commande;`")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(noPerm);
    }

    try {
        let restart = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREY")
            .addField("> :white_check_mark: | Succès", "`Le bot ce restart...`")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return await message.channel.send(restart) && process.exit(0);
    } catch(ex)
    {
        console.error("Ohoh... " + ex.message);
    }
        

};