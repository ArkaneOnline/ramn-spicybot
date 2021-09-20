const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("xur")
        .setDescription("Sends a link to the \"Where the fuck is Xur\" website."),
    async execute(interaction) {
        await interaction.reply("https://wherethefuckisxur.com");
    },
};