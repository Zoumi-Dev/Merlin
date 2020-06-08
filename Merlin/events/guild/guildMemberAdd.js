const Discord = require('discord.js');
const fs = require('fs');

module.exports = async (client, message, member) => {

    client.serv = JSON.parse(fs.readFileSync(`././serveurs/${message.guild.name}.json`, 'utf8'));

    let logsChannel = message.guild.channels.cache.find(ch => ch.name === client.serv["guildMemberAdd"]) || message.guild.channels.cache.find(ch => ch.id === client.serv["guildMemberAdd"]);

    if (logsChannel){
        let join = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#82E5CC")
            .setDescription(`${client.serv["guildMemberAddMessage"]}`)
            .setTimestamp()
            .setFooter(client.config.footer);
        logsChannel.send(join);
    }

    const channel = message.guild.channels.cache.get("712782027883020330");

    if (message.guild.id === client.config.supportServer) {
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("#82E5CC")
            .addField("> :wave: | Bienvenu(e)", `<@${message.user.id}>, nous à rejoint ! Nous t'invitons à aller lire le <#712413922790998076> et si tu souhaites ou si ce n'est pas déjà fait, ajoute le bot sur ton serveur discord !`)
            .setTimestamp()
            .setFooter(client.config.footer);
        return channel.send(embed) && message.guild.member(message.user.id).roles.add(message.guild.roles.cache.find(r => r.name === "non-verifier").id);
    }
};