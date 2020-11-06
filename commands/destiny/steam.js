const { appendFile } = require("fs")

module.exports = {
    config: {
        name: "steam",
        aliases: "",
        description: "Gives a guide on how to link your Steam to your Discord.",
        usage: "(none)",
        category: "destiny"
    },
    run: async (client, message, args) => {
        message.channel.send({
            files: [{
                attachment: "assets/steam.png",
                name: "steam.png"
            }]
        });
    }
}