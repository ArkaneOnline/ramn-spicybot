const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("steam")
        .setDescription("Provides information on how to link your Steam account to your Discord account"),

    async execute(interaction) {
        interaction.reply({
            content: "To link your Steam account to your Discord account, click on the following, **User Settings -> Connections -> Steam Icon** \nTo get to User Settings, click the cog in the bottom left. \nOnce you click on the Steam icon, you will need to sign in with your Steam account, then your accounts should automatically connect!",
            ephemeral: true
        })
    }
}