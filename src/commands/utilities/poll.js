const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions, MessageEmbed, Message } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("poll")
        .setDescription("Create a poll that posts to the current channel")
        .addStringOption(option => option.setName("content").setDescription("The content that you will be polling users about").setRequired(true))
        .addStringOption(option => option.setName("choice1").setDescription("One of the choices users can choose in your poll").setRequired(true))
        .addStringOption(option => option.setName("choice2").setDescription("One of the choices users can choose in your poll").setRequired(true))
        .addStringOption(option => option.setName("choice3").setDescription("One of the choices users can choose in your poll").setRequired(false))
        .addStringOption(option => option.setName("choice4").setDescription("One of the choices users can choose in your poll").setRequired(false))
        .addStringOption(option => option.setName("choice5").setDescription("One of the choices users can choose in your poll").setRequired(false))
        .addStringOption(option => option.setName("choice6").setDescription("One of the choices users can choose in your poll").setRequired(false))
        .addStringOption(option => option.setName("choice7").setDescription("One of the choices users can choose in your poll").setRequired(false))
        .addStringOption(option => option.setName("choice8").setDescription("One of the choices users can choose in your poll").setRequired(false))
        .addStringOption(option => option.setName("choice9").setDescription("One of the choices users can choose in your poll").setRequired(false)),
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