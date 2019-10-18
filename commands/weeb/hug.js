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
        console.log(await neko.sfw.hug().then(x => x.url(x)));
        message.channel.send(await neko.sfw.hug());
    }
}