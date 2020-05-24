const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete();
    return (await message.channel.send(':timer:')).edit(`:ping_pong: | Pong ! \`${client.ws.ping}\` ms`);
};

module.exports.help = {
    name: "ping",
    cooldown: 5,
};