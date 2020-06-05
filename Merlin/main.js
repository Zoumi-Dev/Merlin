const Discord = require("discord.js");

const config = require('./config.json');

const Enmap = require('enmap');

const fs = require("fs");

const client = new Discord.Client();

client.config = config;

client.commands = new Enmap();

client.cooldowns = new Discord.Collection();

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

client.login(config.token);