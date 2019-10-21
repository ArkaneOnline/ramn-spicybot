const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "baka",
        aliases: [],
        description: "Baka!",
        usage: "",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let baka = await neko.sfw.baka();
        message.channel.send(`Baka! ${baka.url}`);

        return;
    }
}