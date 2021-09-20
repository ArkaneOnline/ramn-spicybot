const { SlashCommandBuilder } = require("@discordjs/builders");
const { execute } = require("../information/ping");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("joinclan")
        .setDescription("Sends a link with more information on how to join our clan!"),
    async execute(interaction) {
        await interaction.reply({
            content: "Click this link for more information! \nhttps://discord.com/channels/823425620519944232/842666934600597515/883971070502256650",
            ephemeral: true
        });
    },
};