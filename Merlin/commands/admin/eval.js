const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    function clean(text) {
        if (typeof text === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    }

    if (message.author.id !== client.config.zoumi){
        return message.channel.send(`<@${message.author.id}>, vous n'avez pas la permission d'utiliser cette commande !`);
    }
    const code = args.join(' ');
    const evaled = eval(code);
    const cleanCode = await clean(evaled);
    await message.channel.send(cleanCode, {code: "js"});
};