const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gambit")
        .setDescription("gambit."),

    async execute(interaction) {
        return interaction.reply("gambit \nhttps://cdn.discordapp.com/attachments/959324765754101821/959325998204215368/gambit_logo_wallpaper__no_text__by_1337ninjasakura_dcejdsv-fullview.jpg")
    }
}