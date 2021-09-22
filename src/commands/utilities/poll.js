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
        //add choices and message to variables
        let content = interaction.options.getString("content");
        let choice1 = interaction.options.getString("choice1");
        let choice2 = interaction.options.getString("choice2");
        let choice3 = interaction.options.getString("choice3");
        let choice4 = interaction.options.getString("choice4");
        let choice5 = interaction.options.getString("choice5");
        let choice6 = interaction.options.getString("choice6");
        let choice7 = interaction.options.getString("choice7");
        let choice8 = interaction.options.getString("choice8");
        let choice9 = interaction.options.getString("choice9");

        //checking
        let choiceArray = [choice3, choice4, choice5, choice6, choice7, choice8, choice9];
        var filteredChoiceArray = choiceArray.filter(element => element !== null);

        //clear old variables
        choice3 = null;
        choice4 = null;
        choice5 = null;
        choice6 = null;
        choice7 = null;
        choice8 = null;
        choice9 = null;

        //set new variables
        if(filteredChoiceArray[0]) choice3 = filteredChoiceArray[0];
        if(filteredChoiceArray[1]) choice4 = filteredChoiceArray[1];
        if(filteredChoiceArray[2]) choice5 = filteredChoiceArray[2];
        if(filteredChoiceArray[3]) choice6 = filteredChoiceArray[3];
        if(filteredChoiceArray[4]) choice7 = filteredChoiceArray[4];
        if(filteredChoiceArray[5]) choice8 = filteredChoiceArray[5];
        if(filteredChoiceArray[6]) choice9 = filteredChoiceArray[6];

        //create embed
        let pollembed = new MessageEmbed()
            .setTitle("Poll")
            .setColor("GREEN")
            .setDescription(content)
            .addField(`1️⃣ **Choice 1**`, choice1)
            .addField(`2️⃣ **Choice 2**`, choice2)
            .setFooter(`${interaction.client.user.username} polls`, interaction.client.user.avatarURL)
            .setTimestamp()

        if(choice3) pollembed.addField(`3️⃣ **Choice 3**`, choice3);
        if(choice4) pollembed.addField(`4️⃣ **Choice 4**`, choice4);
        if(choice5) pollembed.addField(`5️⃣ **Choice 5**`, choice5);
        if(choice6) pollembed.addField(`6️⃣ **Choice 6**`, choice6);
        if(choice7) pollembed.addField(`7️⃣ **Choice 7**`, choice7);
        if(choice8) pollembed.addField(`8️⃣ **Choice 8**`, choice8);
        if(choice9) pollembed.addField(`9️⃣ **Choice 9**`, choice9);

        //send embed
        const msg = await interaction.channel.send({ embeds: [pollembed] });
        
        //add reactions to embed
        msg.react("1️⃣");
        msg.react("2️⃣");
        if(choice3) msg.react("3️⃣");
        if(choice4) msg.react("4️⃣");
        if(choice5) msg.react("5️⃣");
        if(choice6) msg.react("6️⃣");
        if(choice7) msg.react("7️⃣");
        if(choice8) msg.react("8️⃣");
        if(choice9) msg.react("9️⃣");

        //end the interation
        interaction.reply({
            content: "Poll Created!",
            ephemeral: true
        })
    }
}