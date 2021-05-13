const config = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "apply",
        aliases: ["modapp", "applyformod", "staffapp"],
        description: "A command that sends a link to our Staff application form",
        category: "moderation"
    },
    run: async (client, message, args) => {
        let applyEmbed = new MessageEmbed()
            .setColor(config.colors.purple)
            .setTitle("Click here to apply for Staff")
            .setURL("https://forms.gle/LMHkR5NY28rCfZQb7")
            .setDescription("Above is a link to send in an application to our Staff team to become a Staff member for the server. Please keep your DMs open as we will DM you with the status of your application.")
            .setThumbnail(message.guild.icon);

        return message.channel.send(applyEmbed);
    }
}