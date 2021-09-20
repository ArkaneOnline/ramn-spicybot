const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Clears a specified amount of messages from the current channel")
        .addIntegerOption(option => option.setName("number").setDescription("The number of messages to clear").setRequired(true)),
    async execute(interaction) {
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({
            content: "You do not have permission to perform this action",
            ephemeral: true
        })
        let number = interaction.options.getInteger("number");
        if(number >= 101) return interaction.reply({
            content: "Amount of messages to delete cannot exceed 100 due to Discord API limitations",
            ephemeral: true
        })
        await interaction.channel.bulkDelete(number, true);
        await interaction.reply({
            content: `Removed ${number} messages!`,
            ephemeral: true
        })
    }
}