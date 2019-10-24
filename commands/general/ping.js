module.exports = {
    config: {
        name: "ping",
        aliases: ["pong", "latency"],
        description: "A command to test bot latency",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        const m = await message.channel.send("Ping?");
        m.edit(`🏓 \n Latency is ${m.createdTimestamp - message.createdTimestamp}ms \n API Latency is ${Math.round(client.ping)}ms`);
    }
}