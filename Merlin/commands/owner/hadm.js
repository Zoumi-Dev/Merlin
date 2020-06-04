const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (client.config.ownerID.includes(message.author.id)){
        let hadm = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLACK")
            .setDescription(`> Woaa trop fort <@${message.author.id}>, tu es owner :drooling_face:`)
            .addField(`> :crown: | 『Owner(${client.commands.filter(cat => cat.help.categories === "owner").map(cmd => cmd.help.name).length})』`, `\`\`\`${client.commands.filter(cat => cat.help.categories === "owner").map(cmd => cmd.help.name).join(", ")}\`\`\``, true)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(hadm);
    }
    
};

module.exports.help = {
    name: "hadm",
    categories: "owner",
};