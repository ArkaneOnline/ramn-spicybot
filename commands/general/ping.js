module.exports = {
    config: {
        name: "ping",
        aliases: ["pong", "latency"],
        description: "A command to test bot latency",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        //sends a message to the current channel and stores the data for it in the variable "m"
        const m = await message.channel.send("Ping?");

        //edits the message and displays latency from the client to discord, and the client to the API
        m.edit(`🏓 \n Latency is ${m.createdTimestamp - message.createdTimestamp}ms \n API Latency is ${Math.round(client.ping)}ms`);
    }
}