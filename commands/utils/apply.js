const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "apply",
        aliases: [],
        description: "A command that allows you to apply for the moderator position in our Discord Server!",
        usage: "<application>",
        category: "utils"
    },
    run: async (client, message, args) => {
        await message.delete();

        let application = args.join(" ");
        if (!application) return message.reply("Incorrect Usage! Example: `/apply I want to be mod because...`");

        let appembed = new RichEmbed()
        .setColor(config.colors.purple)
        .setTitle("Moderator Application")
        .addField("Applicant", message.author)
        .addField("Application", application)
        .setTimestamp()

        let mchannel = message.guild.channels.find(`name`, "mod-apps");
        mchannel.send(appembed);
        message.reply("You application has been sent!");
    }
}