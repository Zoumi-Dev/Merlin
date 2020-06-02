const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!client.config.ownerID.includes(message.author.id)){
        return message.reply("vous n'avez pas la permission !");
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setDescription("> :white_check_mark: | Le bot est entrain de redemarrer !")
        .setTimestamp()
        .setFooter(`${client.config.footer}`);
    return await message.channel.send(embed) && process.exit(0);

};

module.exports.help = {
    name: "restart",
    description: "Permet de redemarer le bot.",
    usage: "_restart",
};