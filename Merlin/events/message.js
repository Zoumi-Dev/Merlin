module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);

    if (!cmd){
        return message.channel.send(`<@${message.author.id}>, cette commande n'existe pas ! Veuillez faire \`_help\` pour voir la liste des commandes disponibles et si vous souhaitez ajouter notre bot faite \`_bot-infos\` et clicker sur m'inviter !`);
    }

    if (message.content === message.mentions.has(client.user.id)){
        return message.channel.send('lol');
    }

    cmd.run(client, message, args);
};