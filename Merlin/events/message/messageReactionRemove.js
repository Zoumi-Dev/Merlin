const Discord = require('discord.js');

module.exports = async (client, messageReaction, user) => {

    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const channel = message.guild.channels.cache.find(e => e.id === "718420987078639647");

    const htmlRole = message.guild.roles.cache.find(e => e.name === "html");
    const jsRole = message.guild.roles.cache.find(e => e.name === "js");
    const phpRole = message.guild.roles.cache.find(e => e.name === "php");

    if (member.user.bot) return false;

    if (["js", "php", "html"].includes(messageReaction.emoji.name) && message.channel.id === channel.id){
        switch (messageReaction.emoji.name) {
            case "js":
                await member.roles.remove(jsRole);
                await member.user.send(`> Le rôle \`${jsRole.name}\` vous a été retiré avec succès !`);
                break;
            case "php":
                await member.roles.remove(phpRole);
                await member.user.send(`> Le rôle \`${phpRole.name}\` vous a été retiré avec succès !`);
                break;
            case "html":
                await member.roles.remove(htmlRole);
                await member.user.send(`> Le rôle \`${htmlRole.name}\` vous a été retiré avec succès !`);
        }
    }

};