const exec = require('child_process').exec;

module.exports.run = async (client, message, args) => {

    if (!client.config.ownerID.includes(message.author.id)){
        return message.reply("vous n'avez pas la permission d'utiliser cette commande !")
    }

    if (!args[0]){
        return message.reply('Utilisation _exec [commande]. Exemple _exec npm -v')
    }

    exec(args.join(" "), (err, stdout, stderr) => {
        if (err){
            return message.channel.send(err.message, {code: "js"});
        }
        if (stderr){
            return message.channel.send(stderr, {code: "js"});
        }
        if (exec.length < 2048){
            message.channel.send(stdout, {code: "js"});
        }else{
            return message.channel.send(stdout.slice(0, 2048)) && message.channel.send(stdout.slice(2048, exec.length));
        }
    })

};

module.exports.help = {
    name: "exec",
    categories: "owner",
};