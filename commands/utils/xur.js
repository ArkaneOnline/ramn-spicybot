module.exports = {
    config: {
        name: "xur",
        aliases: ["xorg"],
        description: "A command that links to https://wherethefuckisxur.com",
        category: "utils"
    },
    run: async (client, message, args) => {
        await message.delete();
        message.channel.send("https://wherethefuckisxur.com");
        return;
    }
}