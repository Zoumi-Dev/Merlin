const Enmap = require('enmap');
const figlet = require('figlet');
const fs = require('fs');

module.exports = async (client, message) => {

    if (message.author.bot) return;

    if (!fs.existsSync(`././serveurs/${message.guild.name}.json`)){
        fs.writeFileSync(`././serveurs/${message.guild.name}.json`, `{\n"${message.guild.name}": "${message.guild.id}",\n"prefix": "=",\n"guildMemberAdd": false,\n"guildMemberRemove": false,\n"logs-channel": false\n}`, 'utf-8'), (err) => {
            if (err) return console.log(err.message);
        };
        return message.channel.send(`${client.emojis.cache.find(e => e.id === client.emo.kawai)} Aucune config trouvée, création de la config en cours...`);

    }else {
        client.serv = JSON.parse(fs.readFileSync(`././serveurs/${message.guild.name}.json`, 'utf8'));
    }
    const args = message.content.slice(client.serv["prefix"].length).split(/ +/);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(command));

    if (message.content.indexOf(client.serv["prefix"]) !== 0) return;

    if (message.guild.id === client.config.supportServer){
        if (message.content.includes("https") || message.content.includes("http") || message.content.includes("HTTPS") || message.content.includes("HTTP")){
            message.delete();
        }
    }

    /* Si le bot est mentionner */
    if (message.mentions.has(`${client.user.id}`, {ignoreEveryone: true})) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        return message.channel.send(`<@${message.author.id}>, mon prefix est \`${client.serv["prefix"]}\`. Si tu souhaites voir la liste des commandes disponibles fait \`${client.serv["prefix"]}help\` . Si tu souhaites m'ajouter fait \`${client.serv["prefix"]}bot-infos\` et click sur m'inviter !`);
    }

    if (message.content.indexOf(client.serv["prefix"]) !== 0) return;

    if (message.channel.type === "dm") return client.emit("messagePriver", message);

    /* Si le bot est en mode maintenance */
    if(cmd) {
        if (!client.config.ownerID.includes(message.author.id)) {
            if (client.config.maintenance === true) {
                return message.channel.send(`<@${message.author.id}>, le bot est en mode \`maintenance\` pour la raison \`${client.config.maintenanceReason}\`, nous vous prions de patienter !`);
            }
        }
    }

    /* Si la commande n'existe pas */
    if (!cmd){
        return message.channel.send(`<@${message.author.id}>, cette commande n'existe pas ! Veuillez faire \`${client.serv["prefix"]}help\` pour voir la liste des commandes disponibles et si vous souhaitez ajouter notre bot faites \`${client.serv["prefix"]}bot-infos\` et cliquez sur m'inviter !`);
    }

    /* Cooldown */
    if (!client.cooldowns.has(cmd.help.name)){
        client.cooldowns.set(cmd.help.name, new Enmap());
    }

    const timeNow = Date.now();
    const timeSTamp = client.cooldowns.get(cmd.help.name);
    const cdAmount = (cmd.help.cooldown || 5) * 1000;

    if (!client.config.ownerID.includes(message.author.id)) {
        if (timeSTamp.has(message.author.id)) {
            const cdExpTime = timeSTamp.get(message.author.id) + cdAmount;

            if (timeNow < cdExpTime) {
                timeLeft = (cdExpTime - timeNow) / 1000;
                return message.channel.send(`<@${message.author.id}>, veuiller patienter \`${timeLeft.toFixed(0)}\` seconde(s) avant de ré-utiliser cette commande.`);
            }
        }
    }

    timeSTamp.set(message.author.id, timeNow);
    setTimeout(() => timeSTamp.delete(message.author.id), cdAmount);

    cmd.run(client, message, args);
};