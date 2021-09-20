const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kicks a specified user from the server with a reason")
        .addUserOption(option => option.setName("targetuser").setDescription("The user that you would like to kick").setRequired(true))
        .addStringOption(option => option.setName("reason").setDescription("The reason why the user is being kicked").setRequired(true)),

    async execute(interaction) {
        if(!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.reply({
            content: "You do not have permissions to perform this action",
            ephemeral: true
        });
        
        let targetuser = interaction.guild.members.cache.get(interaction.options.getUser("targetuser").id);
        let reason = interaction.options.getString("reason");

        if(targetuser.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return interaction.reply({
            content: "This user is considered too important to kick. \nIf you believe this user still needs to be kicked, please contact the server owner.",
            ephemeral: true
        });

        targetuser.kick({ reason: reason });
        interaction.reply("User has been kicked.");
    }
}