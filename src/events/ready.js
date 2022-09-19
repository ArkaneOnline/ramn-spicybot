module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        client.user.setPresence({ activities: [{ name: `ramnclan.ga` }], status: "dnd" })
        console.log(`\n${client.user.username} is online!`);
    }
}
