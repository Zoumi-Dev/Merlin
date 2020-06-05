const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();

    let embed = new Discord.MessageEmbed()
        .setAuthor("Merlin")
        .setDescription("> :green_circle: = en ligne et :red_circle: = hors ligne")
        .addField(
            "> Voici la liste du staff de Merlin'Bot",
            `:crown: | __**Owner**__\n\n` +
            `✦ ${client.guilds.cache.get(client.config.supportServer).member("371340889722847234").presence.status === "online" || client.guilds.cache.get(client.config.supportServer).member("371340889722847234").presence.status === "idle" || client.guilds.cache.get(client.config.supportServer).member("371340889722847234").presence.status === "dnd" ? `:green_circle: ${client.guilds.cache.get(client.config.supportServer).member("371340889722847234").user.tag}` : `:red_circle: ${client.guilds.cache.get(client.config.supportServer).member("371340889722847234").user.tag}`}\n` +
            `✦ ${client.guilds.cache.get(client.config.supportServer).member("660921972271611924").presence.status === "online" || client.guilds.cache.get(client.config.supportServer).member("660921972271611924").presence.status === "idle"|| client.guilds.cache.get(client.config.supportServer).member("660921972271611924").presence.status === "dnd" ? `:green_circle: ${client.guilds.cache.get(client.config.supportServer).member("660921972271611924").user.tag}` : `:red_circle: ${client.guilds.cache.get(client.config.supportServer).member("660921972271611924").user.tag}`}\n\n` +
            `:gem: | __**Support**__\n\n` +
            `✦ ${client.guilds.cache.get(client.config.supportServer).member("658016476548300810").presence.status === "online" || client.guilds.cache.get(client.config.supportServer).member("658016476548300810").presence.status === "idle"|| client.guilds.cache.get(client.config.supportServer).member("658016476548300810").presence.status === "dnd" ? `:green_circle: ${client.guilds.cache.get(client.config.supportServer).member("658016476548300810").user.tag}` : `:red_circle: ${client.guilds.cache.get(client.config.supportServer).member("658016476548300810").user.tag}`}\n` +
            `✦ ${client.guilds.cache.get(client.config.supportServer).member("378995926058139649").presence.status === "online" || client.guilds.cache.get(client.config.supportServer).member("378995926058139649").presence.status === "idle"|| client.guilds.cache.get(client.config.supportServer).member("378995926058139649").presence.status === "dnd" ? `:green_circle: ${client.guilds.cache.get(client.config.supportServer).member("378995926058139649").user.tag}` : `:red_circle: ${client.guilds.cache.get(client.config.supportServer).member("378995926058139649").user.tag}`}`
        )
        .setTimestamp()
        .setFooter(client.config.footer);
    return message.channel.send(embed);

};

module.exports.help = {
    name: "staff",
    categories: "infos",
    cooldown: 30,
};