const Discord = require("discord.js");

const config = require('./config.json');

const admin = require('./admin.json');

const Enmap = require('enmap');

const fs = require("fs");

const client = new Discord.Client();

client.config = config;

client.admin = admin;

client.commands = new Enmap();

const loadCommands = (dir = "./commands/") => {
  fs.readdirSync(dir).forEach(dirs => {
      const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));

      for (const file of commands){
          const getFileName = require(`${dir}/${dirs}/${file}`);
          client.commands.set(getFileName.help.name, getFileName);
          console.log(`Commande chargée: ${getFileName.help.name}`);
      }
  })
};

loadCommands();

const loadEvents = (dir = "./events/") => {
  fs.readdirSync(dir).forEach(dirs => {
      const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

      for (const event of events){
          const evt = require(`${dir}/${dirs}/${event}`);
          const evtName = event.split(".")[0];
          client.on(evtName, evt.bind(null, client));
          console.log(`Evenement chargé: ${evtName}`);
      }
  });
};

loadEvents();

/*
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
*/

client.login(config.token);