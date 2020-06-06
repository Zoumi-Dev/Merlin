const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (!args[0]) {
        let noargs = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}bingo [nombre]\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(noargs);
    }

    if (isNaN(args[0])){
        let embed = new Discord.MessageEmbed()
            .setAuthor("Merlin")
            .setColor("GREEN")
            .addField("> :x: | Erreur", `\`Utilisation: ${client.serv["prefix"]}bingo [nombre]\``)
            .setTimestamp()
            .setFooter(client.config.footer);
        return message.channel.send(embed);
    }

    let rep = Math.floor(Math.random() * args[0]);

    await message.channel.send(`A vos marques ! prêt ! partez ! Vous avez **__1 minute__** pour trouver un nombre entre **__0__** et **__${args[0]}__** ! Que le meilleur gagne.`);

    const filter = m => m.author.id !== client.user.id;

    const collector = message.channel.createMessageCollector(filter, {time: 60000});

    collector.on("collect", async (collected) => {
        if (collected.content.toLowerCase() === "stop"){
            return collector.stop(`:white_check_mark: | Le bingo à été annulé par **__${collected.author.toString()}__** !`);
        }else{
            let reponse = await collected.content.trim();
            let response = parseInt(reponse);
            if (isNaN(response)){
                return false;
            }else if (response === rep){
                await collector.stop(`> :tada: | Waouh !\n> :trophy: | ${collected.author.toString()} est le vainqueur !\n> :1234: | Le nombre était **__${rep}__**`);
            }
        }
    });
    collector.on("end", async(collected, reason) => {
        if (reason && reason !== "time"){
            return message.channel.send(reason);
        }else{
            return message.channel.send(`> :hourglass_flowing_sand: | **__Temps écoulé__** !\n> :cry: | **__Aucun vainqueur__** !\n> :1234: | Le nombre était **__${rep}__** !`);
        }

    });
};

module.exports.help = {
    name: "bingo",
    categories: "fun",
    description: "Permet de lance le bingo.",
    usage: "=bingo [nombre]"
};