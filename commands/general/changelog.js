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
        .setTitle("Changelog 10/17/19")
        .setDescription("https://github.com/ArkaneOnline/spicybot/commits/master")
        .setURL("https://github.com/ArkaneOnline/spicybot/commits/master")
        .setThumbnail(client.user.displayAvatarURL)
        .addField("Added the serverinfo command", "Check `/help serverinfo` for more info")
        .addField("Added the userinfo command", "Try `/help userinfo` for more info")
        .addField("Side note", "If you like Spicy Bot, or our server, you can show your support by donating (`/patreon`) and obtain a special donator role!")
        .setFooter("Proudly made by: Arkane", client.users.get(config.importantIDs.staffIDs.arkane).displayAvatarURL)

        message.channel.send(changes);
    }
}