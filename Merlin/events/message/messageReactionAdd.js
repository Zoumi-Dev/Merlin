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
        }
    }

};