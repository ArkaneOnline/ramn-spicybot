const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ark")
        .setDescription("Allows you to assign the ARK Updates role to yourself")
        .addStringOption(option => 
            option.setName("add/remove")
                .setDescription("Choose whether to add or remove the role")
                .setRequired(true)
                .addChoice("Add", "add")
                .addChoice("Remove", "remove")),

    async execute(interaction) {
        let choice = interaction.options.getString("Add/Remove");
        let arkrole = interaction.guild.roles.cache.get("931801378693722132");

        if(choice === "add") {
            interaction.member.roles.add(arkrole, "Spicybot Self assignable role");
        } else if(choice === "remove") {
            interaction.member.roles.remove(arkrole, "Spicybot Self assignable role");
        }
    }
}