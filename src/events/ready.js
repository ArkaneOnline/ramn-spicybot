module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        client.user.setPresence({ activities: [{ name: `ramnclan.tk | ${client.users.cache.size.toString()} members` }], status: "dnd" })
        console.log(`\n${client.user.username} is online!`);
    }
}
