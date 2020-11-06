module.exports = {
    config: {
        name: "xur",
        aliases: "",
        description: "Sends a link to the wherethefuckisxur website.",
        usage: "(none)",
        category: "destiny"
    },
    run: async (client, message, args) => {
        message.channel.send("https://wherethefuckisxur.com");

        return;
    }
}