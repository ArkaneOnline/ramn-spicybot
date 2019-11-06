//stores data from packages in a variable
const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "changelog",
        aliases: ["patch", "patchnotes"],
        description: "View a list of the most recent changes to the bot",
        usage: "",
        category: "general"
    },  
    run: async (client, message, args) => {
        //deletes the message and waits for the message to be deleted
        await message.delete();

        //creates a new embed with all of the following information
        let changes = new RichEmbed()
        .setColor(config.colors.green)
        .setTitle("Changelog 11/5/19")
        .setURL("https://github.com/ArkaneOnline/spicybot/commits/master")
        .setThumbnail(client.user.displayAvatarURL)
        .addField("Finished adding comments", "Helps all the developers too understand how the bot works, `by Arkane`")
        .addField("Add eval", "Bot owner only, `/help eval` for more info, `by Arkane`")
        .addField("Add welcome and goodbye", "The bot should now send messages in the welcome channel when people join/leave, `by Arkane`")
        .addField("Added nickname command", "`/help nick` for more information, `by Arkane`")
        .addBlankField(true)
        .addField("Side note", "If you like Spicy Bot, or our server, you can show your support by donating (`/patreon`) and obtain a special donator role!")
        .setFooter("Proudly made by: The RAMN Team", client.user.avatarURL)

        //sends the embed to the current channel
        message.channel.send(changes);

        //stops the code
        return;
    }
}