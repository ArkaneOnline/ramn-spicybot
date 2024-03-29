const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ark")
        .setDescription("Allows you to assign the ARK Updates role to yourself")
        .addStringOption(option => 
            option.setName("option")
                .setDescription("Choose whether to add or remove the role")
                .setRequired(true)
                .addChoice("Add", "add")
                .addChoice("Remove", "remove")),

    async execute(interaction) {
        let choice = interaction.options.getString("option");
        let arkrole = interaction.guild.roles.cache.get("931801378693722132");

        if(choice === "add") {
            interaction.member.roles.add(arkrole, "Spicybot Self assignable role");
            interaction.reply({
                content: "The **ARK Updates** role has been added to you!",
                ephemeral: true
            });
        } else if(choice === "remove") {
            interaction.member.roles.remove(arkrole, "Spicybot Self assignable role");
            interaction.reply({
                content: "The **ARK Updates** role has been removed from you!",
                ephemeral: true
            });
        }
    }
}