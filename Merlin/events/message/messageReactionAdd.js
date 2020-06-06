const Discord = require('discord.js');

module.exports = async (client, messageReaction, user) => {

    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const channel = message.guild.channels.cache.find(e => e.id === "718420987078639647");
    const channelVerif = message.guild.channels.cache.find(e => e.name === "verification");

    const htmlRole = message.guild.roles.cache.find(e => e.name === "html");
    const jsRole = message.guild.roles.cache.find(e => e.name === "js");
    const phpRole = message.guild.roles.cache.find(e => e.name === "php");
    const nonVerifier = message.guild.roles.cache.find(e => e.name === "non-verifier");
    const membre = message.guild.roles.cache.find(e => e.name === "👥 | Membres");

    if (member.user.bot) return false;

    /* Réaction rôle */
    if (["js", "php", "html"].includes(messageReaction.emoji.name) && message.channel.id === channel.id){
        switch (messageReaction.emoji.name) {
            case "js":
                member.roles.add(jsRole);
                await member.user.send(`> Le rôle \`${jsRole.name}\` vous a été attribué avec succès !`);
                break;
            case "php":
                member.roles.add(phpRole);
                await member.user.send(`> Le rôle \`${phpRole.name}\` vous a été attribué avec succès !`);
                break;
            case "html":
                member.roles.add(htmlRole);
                await member.user.send(`> Le rôle \`${htmlRole.name}\` vous a été attribué avec succès !`);
                break;
        }
    }

    /* Verification rôle */
    if (["✅"].includes(messageReaction.emoji.name) && message.channel.id === channelVerif.id){
        switch (messageReaction.emoji.name) {
            case "✅":
                await member.roles.remove(nonVerifier);
                member.roles.add(membre);
                break;
        }
    }

    /* Help */
    if (["🗞", "🎉", "🔧", "🔞", "👮", "⚙"].includes(messageReaction.emoji.name)){
        switch (messageReaction.emoji.name) {
            /* Informations */
            case "🗞":
                let infos = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setColor("BLUE")
                    .setDescription(`**__Voici les commandes disponibles pour la catégorie \`Informations\`__**\n\n\`\`\`${client.commands.filter(cat => cat.help.categories === "infos").map(cm => cm.help.name).join(", ")}\`\`\``)
                    .setTimestamp()
                    .setFooter(client.config.footer);
                await message.channel.send(infos).then(e => {
                    e.delete({timeout: 20000})
                });
                break;
            /* Fun */
            case "🎉":
                let fun = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setColor("BLUE")
                    .setDescription(`**__Voici les commandes disponibles pour la catégorie \`Fun\`__**\n\n\`\`\`${client.commands.filter(cat => cat.help.categories === "fun").map(cm => cm.help.name).join(", ")}\`\`\``)
                    .setTimestamp()
                    .setFooter(client.config.footer);
                await message.channel.send(fun).then(e => {
                    e.delete({timeout: 20000})
                });
                break;
            /* Pratique */
            case "🔧":
                let pratique = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setColor("BLUE")
                    .setDescription(`**__Voici les commandes disponibles pour la catégorie \`Pratique\`__**\n\n\`\`\`${client.commands.filter(cat => cat.help.categories === "pratique").map(cm => cm.help.name).join(", ")}\`\`\``)
                    .setTimestamp()
                    .setFooter(client.config.footer);
                await message.channel.send(pratique).then(e => {
                    e.delete({timeout: 20000})
                });
                break;
            /* Nsfw */
            case "🔞":
                let nsfw = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setColor("BLUE")
                    .setDescription(`**__Voici les commandes disponibles pour la catégorie \`Nsfw\`__**\n\n\`\`\`${client.commands.filter(cat => cat.help.categories === "nsfw").map(cm => cm.help.name).join(", ")}\`\`\``)
                    .setTimestamp()
                    .setFooter(client.config.footer);
                await message.channel.send(nsfw).then(e => {
                    e.delete({timeout: 20000})
                });
                break;
            /* Admin */
            case "👮":
                let admin = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setColor("BLUE")
                    .setDescription(`**__Voici les commandes disponibles pour la catégorie \`Administrative\`__**\n\n\`\`\`${client.commands.filter(cat => cat.help.categories === "admin").map(cm => cm.help.name).join(", ")}\`\`\``)
                    .setTimestamp()
                    .setFooter(client.config.footer);
                await message.channel.send(admin).then(e => {
                    e.delete({timeout: 20000})
                });
                break;
            case "⚙":
                let param = new Discord.MessageEmbed()
                    .setAuthor("Merlin")
                    .setColor("BLUE")
                    .setDescription(`**__Voici les commandes disponibles pour la catégorie \`Paramètre\`__**\n\n\`\`\`${client.commands.filter(cat => cat.help.categories === "parametre").map(cm => cm.help.name).join(", ")}\`\`\``)
                    .setTimestamp()
                    .setFooter(client.config.footer);
                await message.channel.send(param).then(e => {
                    e.delete({timeout: 20000})
                });
                break;
        }
    }
};