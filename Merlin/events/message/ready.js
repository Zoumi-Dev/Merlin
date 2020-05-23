module.exports = client => {
        const activities_list = [
            `${client.guilds.cache.size} serveur | _help`,
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
        console.log(`Je suis dans ${client.guilds.cache.size} serveur !`);
};