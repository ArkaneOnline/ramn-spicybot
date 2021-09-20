const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions, MessageEmbed, Message } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("poll")
        .setDescription("Create a poll that posts to the current channel")
        .addStringOption(option => option.setName("content").setDescription("The content that you will be polling users about").setRequired(true)),
    async execute(interaction) {
        if(!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({
            content: "You do not have permission to perform this action",
            ephemeral: true
        })
        let content = interaction.options.getString("content");
        let pollembed = new MessageEmbed().setTitle("Poll").setDescription(`${content}`).setColor("BLURPLE").setTimestamp();
        const msg = await interaction.channel.send({ embeds: [pollembed] });
        msg.react("✅");
        msg.react("❌");
        interaction.reply({
            content: "Poll Created!",
            ephemeral: true
        })
    }
}