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
        message.reply("Below is a guide on how to link your Steam account to your Discord account. Click the cog in the bottom left to access user settings, then follow the screenshot below.", {
            files: [{
                attachment: "assets/steam.png",
                name: "steam.png"
            }]
        });
    }
}