module.exports = {
    config: {
        name: "hi",
        aliases: ["e", "a"],
        description: "hi",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        message.channel.send("hi.");
        return;
    }
}