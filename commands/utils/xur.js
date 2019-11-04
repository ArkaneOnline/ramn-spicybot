module.exports = {
    config: {
        name: "xur",
        aliases: ["xorg"],
        description: "A command that links to https://wherethefuckisxur.com",
        usage: "",
        category: "utils"
    },
    run: async (client, message, args) => {
        //waits for the message to be deleted
        await message.delete();
        //sends a link
        message.channel.send("https://wherethefuckisxur.com");
        //stops the code
        return;
    }
}