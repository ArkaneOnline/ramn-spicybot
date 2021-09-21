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

        //doing the illegal for checking purposes
        if(!choice3){
            if(!choice4){
                if(!choice5){
                    if(!choice6){
                        if(!choice7){
                            if(!choice8){
                                if(!choice9){
                                    console.log("Poll with no additional choiced created");
                                } else {
                                    if(!choice3){
                                        choice3 = choice9;
                                    } else {
                                        if(!choice4){
                                            choice4 = choice9;
                                        } else {
                                            if(!choice5){
                                                choice5 = choice9;
                                            } else {
                                                if(choice6){
                                                    choice6 = choice9;
                                                } else {
                                                    if(!choice7){
                                                        choice7 = choice9;
                                                    } else {
                                                        choice8 = choice9;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                if(!choice3){
                                    choice3 = choice8;
                                } else {
                                    if(!choice4){
                                        choice4 = choice8;
                                    } else {
                                        if(!choice5){
                                            choice5 = choice8;
                                        } else {
                                            if(!choice6){
                                                choice6 = choice8;
                                            } else {
                                                choice7 = choice8;
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if(!choice3){
                                choice3 = choice7;
                            } else {
                                if(!choice4){
                                    choice4 = choice7;
                                } else {
                                    if(!choice5){
                                        choice5 = choice7;
                                    } else {
                                        choice6 = choice7;
                                    }
                                }
                            }
                        }
                    } else {
                        if(!choice3){
                            choice3 = choice6;
                        } else {
                            if(!choice4){
                                choice4 = choice6;
                            } else {
                                choice5 = choice6;
                            }
                        }
                    }
                } else {
                    if(!choice3){
                        choice3 = choice5;
                    } else {
                        choice5 = choice4;
                    }
                }
            } else {
                choice3 = choice4;
            }
        }

        //testing
        if(choice1) console.log(choice1);
        if(choice2) console.log(choice2);
        if(choice3) console.log(choice3);
        if(choice4) console.log(choice4);
        if(choice5) console.log(choice5);
        if(choice6) console.log(choice6);
        if(choice7) console.log(choice7);
        if(choice8) console.log(choice8);
        if(choice9) console.log(choice9);

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