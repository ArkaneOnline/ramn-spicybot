const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("userinfo")
        .setDescription("Get information about your account or another users account")
        .addUserOption(option => option.setName("user").setDescription("The user you would like to fetch information about").setRequired(false)),

    async execute(interaction) {
        let target = interaction.options.getMember("user");

        if(!target) {
            let embed = new MessageEmbed()
                .setThumbnail(interaction.user.avatarURL({ format: "png" }))
                .setAuthor(interaction.user.tag, interaction.user.avatarURL({ format: "png" }))
                .setColor("GREEN")
                .addField("ID", interaction.user.id, true)
                .addField("Roles", interaction.member.roles.cache.map(r => r).join(' | '), true)
                .addField("Joined Server", interaction.member.joinedAt, true)
                .addField("Joined Discord", interaction.user.createdAt, true)
                .setFooter(`Information gathered by ${interaction.client.user.username}`, interaction.client.user.avatarURL({ format: "png" }))
                .setTimestamp();

            interaction.reply({ embeds: [embded] });
        } else {
            let embed = new MessageEmbed()
                .setThumbnail(target.user.avatarURL({ format: "png" }))
                .setAuthor(target.user.tag, target.user.avatarURL({ format: "png" }))
                .setColor("GREEN")
                .addField("ID", target.user.id, true)
                .addField("Roles", target.roles.cache.map(r => r).join(' | '), true)
                .addField("Joined Server", target.joinedAt, true)
                .addField("Joined Discord", target.user.createdAt, true)
                .setFooter(`Information gathered by ${interaction.client.user.username}`, interaction.client.user.avatarURL({ format: "png" }))
                .setTimestamp();

            interaction.reply({ embeds: [embed] });
        }
    }
}