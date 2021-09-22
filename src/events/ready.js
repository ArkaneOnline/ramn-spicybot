module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        client.user.setPresence({ activities: [{ name: `ramnclan.tk` }], status: "dnd" })
        console.log(`\n${client.user.username} is online!`);
    }
}
