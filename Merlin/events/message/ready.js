const Discord = require('discord.js');

module.exports = client => {

        const activities_list = [
            `${client.guilds.cache.size} serveurs | _help`,
            `${client.users.cache.size} utilisateurs | _help`,
            `rejoins nous 2wn6sQv !`
        ];
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length));
            client.user.setPresence({
                activity: {
                    name: `${activities_list[index]}`,
                    type: "STREAMING"
                },
                status: "online",
            });
        }, 10000);
        console.log(`Je suis dans ${client.guilds.cache.size} serveur:\n${client.guilds.cache.map(s => s.name).join(", ")}`);
        if (client.guilds.cache.get(client.config.supportServer)){

            client.guilds.cache.get(client.config.supportServer).channels.cache.get("718420987078639647").bulkDelete(20);

            let html = client.emojis.cache.find(e => e.name === "html");

            let js = client.emojis.cache.find(e => e.name === "js");

            let php = client.emojis.cache.find(e => e.name === "php");


            let embed = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setDescription(`> Reaction rôle !\n\n${html} \`HTML/CSS\`\n${js} \`JavaScript\`\n${php} \`Hypertext Preprocessor\`\n\n__**Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant !**__`)
                .setTimestamp()
                .setFooter(client.config.footer);
            client.guilds.cache.get(client.config.supportServer).channels.cache.get("718420987078639647").send(embed).then(async e => {
                await e.react(html);
                await e.react(js);
                await e.react(php);
            });

            client.guilds.cache.get(client.config.supportServer).channels.cache.get("718571875705553026").bulkDelete(20);

            let embedd = new Discord.MessageEmbed()
                .setAuthor("Merlin")
                .setColor("BLACK")
                .setDescription(`> Veuillez cliquer sur la réaction :white_check_mark: afin d'obtenir le rôle <@&${client.guilds.cache.get(client.config.supportServer).roles.cache.find(r => r.name === "👥 | Membres").id}>.`)
                .setTimestamp()
                .setFooter(client.config.footer);
            client.guilds.cache.get(client.config.supportServer).channels.cache.get("718571875705553026").send(embedd).then(async c => {
                await c.react('✅');
            })
        }
};