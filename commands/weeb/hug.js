const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "hug",
        aliases: [],
        description: "Send a virtual hug to someone!",
        usage: "(@user)",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let url = neko.sfw.hug();

        message.channel.send(url);
    }
}