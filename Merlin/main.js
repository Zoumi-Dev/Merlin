const Discord = require("discord.js");

const config = require('./config.json');

const admin = require('./admin.json');

const Enmap = require('enmap');

const fs = require("fs");

const client = new Discord.Client();

client.config = config;

client.admin = admin;

client.commands = new Enmap();

fs.readdir("./commands/utilisateur/", (err, files) => {
    console.log(`commands/utilisateur`);
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")){
            console.log("(!!!) Aucune command trouver.");
            return;
        }
        const props = require(`./commands/utilisateur/${file}`);
        const commandName = file.split(".")[0];
        console.log(`//////////////// ${commandName} ////////////////`);
        client.commands.set(commandName, props);
    });
});

fs.readdir("./commands/fun/", (err, files) => {
    console.log(`commands/fun`);
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")){
            console.log("(!!!) Aucune command trouver.");
            return;
        }
        const props = require(`./commands/fun/${file}`);
        const commandName = file.split(".")[0];
        console.log(`//////////////// ${commandName} ////////////////`);
        client.commands.set(commandName, props);
    });
});

fs.readdir("./commands/infos/", (err, files) => {
    console.log(`commands/infos`);
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")){
            console.log("(!!!) Aucune command trouver.");
            return;
        }
        const props = require(`./commands/infos/${file}`);
        const commandName = file.split(".")[0];
        console.log(`//////////////// ${commandName} ////////////////`);
        client.commands.set(commandName, props);
    });
});

fs.readdir("./commands/admin/", (err, files) => {
    console.log(`commands/admin`);
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")){
            console.log("(!!!) Aucune command trouver.");
            return;
        }
        const props = require(`./commands/admin/${file}`);
        const commandName = file.split(".")[0];
        console.log(`//////////////// ${commandName} ////////////////`);
        client.commands.set(commandName, props);
    });
});

fs.readdir("./commands/nsfw/", (err, files) => {
    console.log(`commands/nsfw`);
    if (err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")){
            console.log("(!!!) Aucune command trouver.");
            return;
        }
        const props = require(`./commands/nsfw/${file}`);
        const commandName = file.split(".")[0];
        console.log(`//////////////// ${commandName} ////////////////`);
        client.commands.set(commandName, props);
    });
});

fs.readdir("./events/", (err, files) => {
    if(err) return console.log(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.login(config.token);