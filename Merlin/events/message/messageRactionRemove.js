const Discord = require('discord.js');

module.exports = async (client, message) => {

    if (message.emoji.id === client.emo.kawai){
        return message.channel.send("woaa");
    }

};