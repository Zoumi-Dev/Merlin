const Enmap = require('enmap');

module.exports = async (client, message) => {

    const args = message.content.slice(client.config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(command));

    if (message.author.bot) return;

    if (message.content.indexOf(client.config.prefix) !== 0) return;

    if (message.channel.type === "dm") return client.emit("messagePriver", message);

    /* Si le bot est en mode maintenance */
    if(cmd) {
        if (message.author.id !== client.config.zoumi) {
            if (client.config.maintenance === true) {
                return message.channel.send(`<@${message.author.id}>, le bot est en mode \`maintenance\` pour la raison \`${client.config.maintenanceReason}\`, nous vous prions de patienter !`);
            }
        }
    }

    /* Si le bot est mentionner */
    if (message.mentions.has(`${client.user.id}`, {ignoreEveryone: true})) {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        return message.channel.send(`<@${message.author.id}>, mon prefix est \`${client.config.DEFAULT_SETTINGS.prefix}\`. Si tu souhaite voir la liste des commandes disponibles fait \`_help\` . Si tu souhaite m'ajouter fait \`_bot-infos\` et click sur m'inviter !`);
    }

    /* Si la commande n'existe pas */
    if (!cmd){
        return message.channel.send(`<@${message.author.id}>, cette commande n'existe pas ! Veuillez faire \`_help\` pour voir la liste des commandes disponibles et si vous souhaitez ajouter notre bot faite \`_bot-infos\` et clicker sur m'inviter !`);
    }

    /* Cooldown */
    if (!client.cooldowns.has(cmd.help.name)){
        client.cooldowns.set(cmd.help.name, new Enmap());
    }

    const timeNow = Date.now();
    const timeSTamp = client.cooldowns.get(cmd.help.name);
    const cdAmount = (cmd.help.cooldown || 5) * 1000;

    if (message.author.id !== client.config.zoumi) {
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