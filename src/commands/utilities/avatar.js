const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Send a direct link to your avatar or a specified user's avatar")
        .addUserOption(option => option.setName("user").setDescription("The user whos avatar you would like to view").setRequired(false)),

    async execute(interaction){
        let target = interaction.options.getMember("user");

        if(!target) {
            let avatar = interaction.member.user.avatarURL({ format: "png" });
            interaction.reply(`Here is a link to your avatar: ${avatar}`);
        } else {
            let avatar = target.user.avatarURL({ format: "png" });
            interaction.reply(`Here is a link to ${target.user.username}'s avatar: ${avatar}`);
        }
    }
}