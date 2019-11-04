const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "suggest",
        aliases: ["request"],
        descpription: "A command to suggest various things to the server",
        usage: "<suggestion>",
        category: "general"
    },
    run: async (client, message, args) => {
        //waits for the message to be deleted
        await message.delete();
        //joins the arguments together under a variable
        let suggestion = args.join(" ");
        //checks if you sent a suggestion or not
        if(!suggestion) return message.reply("Tell me what you want to suggest! `/suggest <suggestion>`");

        //defines a new embed
        let suggestembed = new RichEmbed()
        .setTitle("Suggestion")
        .setAuthor(message.member.displayName)
        .setColor(config.colors.purple)
        .setDescription(suggestion)

        //finds the suggestion channel
        let suggestionchannel = message.guild.channels.find(c => c.name === "suggestions");
        //sends the embed to the suggestion channel
        suggestionchannel.send(suggestembed);

        //stops the code and sends a message to the channel saying your suggestion was sent
        return message.reply("Your suggestion has been sent!").then(msg => msg.delete(5000));

    }
}