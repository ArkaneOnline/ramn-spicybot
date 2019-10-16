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
        .setTitle("Changelog 10/15/19")
        .setDescription("https://github.com/ArkaneOnline/spicybot/commits/master")
        .setThumbnail(client.user.displayAvatarURL)
        .addField("Added the Patreon command", `${config.prefix}help patreon for more info`)
        .addField("Fixed up the help command", `${config.prefix}help to view the newly designed command`)
        .setFooter("Proudly made by: Arkane", client.users.get(config.importantIDs.staffIDs.arkane).displayAvatarURL)

        message.channel.send(changes);
    }
}