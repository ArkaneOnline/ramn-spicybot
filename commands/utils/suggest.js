const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "suggest",
        aliases: [],
        descpription: "A command to suggest various things to the server",
        usage: "<suggestion>",
        category: "general"
    },
    run: async (client, message, args) => {
        await message.delete();
        let suggestion = args.join(" ");
        if(!suggestion) return message.reply("Tell me what you want to suggest! `/suggest <suggestion>`");

        let suggestembed = new RichEmbed()
        .setTitle("Suggestion")
        .setAuthor(message.member.displayName)
        .setColor(config.colors.purple)
        .setDescription(suggestion)

        let suggestionchannel = message.guild.channels.find(`name`, "suggestions");
        suggestionchannel.send(suggestembed);

        return message.reply("Your suggestion has been sent!").then(msg => msg.delete(5000));

    }
}