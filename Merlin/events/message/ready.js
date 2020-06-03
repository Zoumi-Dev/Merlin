module.exports = client => {

        const activities_list = [
            `${client.guilds.cache.size} serveurs | _help`,
            `${client.users.cache.size} utilisateurs | _help`,
            `rejoins nous https://discord.gg/2wn6sQv !`
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
};