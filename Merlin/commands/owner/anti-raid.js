const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!client.config.ownerID.includes(message.author.id)){
        return message.reply("vous n'avez pas la permission d'utiliser cette commande.");
    }

    if (client.guilds.cache.get(client.config.supportServer)){
        let ch = client.guilds.cache.get(client.config.supportServer).channels.create("verification", {
            type: "text",
        });

        (await ch).updateOverwrite(message.guild.roles.cache.find(r => r.name === "💎 | Support").id, {
            VIEW_CHANNEL: false,
        });

        (await ch).updateOverwrite(message.guild.roles.cache.find(r => r.name === "👥 | Membres").id, {
            VIEW_CHANNEL: false,
        });

        (await ch).updateOverwrite(message.guild.roles.cache.find(r => r.name === "💜 | Friends").id, {
            VIEW_CHANNEL: false,
        });


        (await ch).updateOverwrite(message.guild.roles.cache.find(r => r.name === "non-verifier").id, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
        });

        await ch.then(async c => {
            let embed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("BLACK")
                .setDescription(`> Veuillez cliquer sur la réaction :white_check_mark: afin d'obtenir le rôle <@&${message.guild.roles.cache.find(r => r.name === "👥 | Membres").id}>.`)
                .setTimestamp()
                .setFooter(client.config.footer);
            c.send(embed).then(r => r.react('✅'));
        })

    }

};

module.exports.help = {
    name: "anti-raid",
};