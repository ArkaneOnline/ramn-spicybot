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
        //waits for the latest message to delete
        await message.delete();
        //stops the code and says mod apps are closed
        return message.reply("Sorry, Moderator applications are currently closed!");

        //joins the arguments together for the application and stores it in a variable
        let application = args.join(" ");
        //checks if you specified the application
        if (!application) return message.reply("Incorrect Usage! Example: `/apply I want to be mod because...`");

        //defines an embed and stores it in a variable
        let appembed = new RichEmbed()
        .setColor(config.colors.purple)
        .setTitle("Moderator Application")
        .addField("Applicant", message.author)
        .addField("Application", application)
        .setTimestamp()

        //finds the channel to send the embed to
        let mchannel = message.guild.channels.find(c => c.name === "mod-apps");
        //sends the embed to the channel
        mchannel.send(appembed);
        //tells the user the application has been sent
        message.reply("You application has been sent!");
        //stops the code
        return;
    }
}