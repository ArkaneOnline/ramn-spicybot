const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "changelog",
        aliases: [],
        description: "View a list of the most recent changes to the bot",
        category: "misc"
    },  
    run: async (client, message, args) => {
        let changes = new RichEmbed()
        .setColor(config.colors.green)
        .setTitle("Changelog 10/13/19")
        .setThumbnail(client.user.displayAvatarURL)
        .addField("Added the Help Command", "Yes, the most important thing has finally been added...")
        .setFooter("Proudly made by: Arkane", client.users.get(config.importantIDs.staffIDs.arkane).displayAvatarURL)
    }
}