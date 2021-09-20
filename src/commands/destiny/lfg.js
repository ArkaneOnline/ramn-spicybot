const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("lfg")
        .setDescription("Adds/Removes the @LFG role from you"),

    async execute(interaction) {
        let lfgrole = "842663913938354207";
        if(!interaction.member.roles.cache.has(lfgrole)) {
            interaction.member.roles.add(lfgrole, "Spicy Bot: User Assigned Role");
            return interaction.reply("I have added the `LFG` role to you!");
        } else {
            interaction.member.roles.remove(lfgrole, "Spicy Bot: User Addigned Role");
            return interaction.reply("I have removed the `LFG` role from you!");
        }
    }
}