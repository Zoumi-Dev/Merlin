const librcon = require('librcon');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (args < 1){
        let msg = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("BLUE")
            .addField("> :x: | Erreur", "`Utilisation: _rcon [mot de passe] [ip] [port]`")
            .setTimestamp()
            .setFooter("Merlin | Powered by Zoumi#0336");
        return message.channel.send(msg);
    }

    let rc = await librcon.send("list", args[0], args[1], args[2]).then((rc) => {
        console.log("Got response : " + res);
    }catch(err){
        console.log("Une erreur est survenue !\n " + err.message);
    })
}
