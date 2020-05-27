const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!args[0]){
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", "`Utilisation: _bingo [nombre]`")
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    let rep = Math.floor(Math.random() * args[0]);

    await message.channel.send('Le bingo commence !');

    const filter = m => m.author.id !== client.user.id;

    const collector = message.channel.createMessageCollector(filter, {time: 60000});

    collector.on("collect", async (collected) => {
        if (collected.content.toLowerCase() === "stop"){
            return collector.stop(`:white_check_mark: | Le bingo à étais annuler par **__${collected.author.toString()}__** !`);
        }else{
            let reponse = await collected.content.trim();
            let response = parseInt(reponse);
            if (isNaN(response)){
                return false;
            }else if (response === rep){
                await collector.stop(`Waouh !\n:trophy: | ${collected.author.toString()} est le vainqueur !\nLe nombre étais ${rep}`);
            }
        }
    });
    collector.on("end", async(collected, reason) => {
        if (reason && reason !== "time"){
            return message.channel.send(reason);
        }else{
            return message.channel.send(`:hourglass_flowing_sand: | **__Temps écouler__** !\n:cry: | **__Aucun vainqueur__** !\nLe chiffre étais **__${rep}__**`);
        }

    });
};

module.exports.help = {
    name: "bingo",
    description: "Permet de lance le bingo.",
    usage: "_bingo [nombre]"
};