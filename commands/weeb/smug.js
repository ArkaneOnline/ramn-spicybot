const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "smug",
        aliases: [],
        description: "smug",
        usage: "",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let smug = await neko.sfw.smug();
        message.channel.send(smug.url);

        return;
    }
}