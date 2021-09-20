const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("send")
        .setDescription("Send a message from the bot to the current channel")
        .addStringOption(option => option.setName("message").setDescription("The message that you would like the bot to send").setRequired(true)),

    async execute(interaction) {
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({
            content: "You do not have permission to perform this action",
            ephemeral: true
        });
        let message = interaction.options.getString("message");
        interaction.channel.send(message);
        interaction.reply({
            content: "Message sent!",
            ephemeral: true
        });
    }
}