const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    message.delete();
    return (await message.channel.send(':timer:')).edit(`:ping_pong: | Pong ! \`${client.ws.ping}\` ms`);
};