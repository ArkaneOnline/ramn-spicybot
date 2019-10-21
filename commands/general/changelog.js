const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "changelog",
        aliases: [],
        description: "View a list of the most recent changes to the bot",
        usage: "",
        category: "general"
    },  
    run: async (client, message, args) => {
        await message.delete();

        let changes = new RichEmbed()
        .setColor(config.colors.green)
        .setTitle("Changelog 10/21/19")
        .setURL("https://github.com/ArkaneOnline/spicybot/commits/master")
        .setThumbnail(client.user.displayAvatarURL)
        .addField("Added the Weeb category", `Check ${config.prefix}help for more info`)
        .addField("Added uptime command", `Check ${config.prefix}help uptime for more info`)
        .addField("Side note", "If you like Spicy Bot, or our server, you can show your support by donating (`/patreon`) and obtain a special donator role!")
        .setFooter("Proudly made by: Arkane", client.users.get(config.importantIDs.staffIDs.arkane).displayAvatarURL)

        message.channel.send(changes);
    }
}