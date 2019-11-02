//requires the packages we need and stores them in a variable
const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "hiatus",
        aliases: [],
        description: "A command that will tell us when you are on leave from the clan for an extended period of time",
        usage: "",
        category: "destiny"
    },
    run: async (client, message, args) => {
        message.return;
        //gather basic info on the user
        let hUser = message.author;
        if (!message.member.roles.find(r => r.name === "RAMN")) return message.reply("This command can only be used by clan members!");
        let joinDate = message.member.joinedAt;

        //start the hiatus process
        //gathers the amount of days a user will be gone
        const filter = m => m.author.id === message.author.id;
        message.channel.send("Please reply with the amount of days that you will be gone! `(Example: 20)` \nType `cancel` to cancel the process");
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000
        }).then(collected => {
            if (!collected.first()) return message.reply("Time's out! Please reply faster next time!");
            if (collected.first().content === "cancel"){
                return message.reply("Process Terminated!");
            }
            let days = collected.first().content;
        
            //edits the message
            message.channel.send("Please reply with the reason you will be gone! \n Type `cancel` to cancel the process");

            //gathers the reason why a user will be gone
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 120000
            }).then(collected => {
                if (!collected.first()) return message.reply("Time's out! Please reply faster next time!");
                if (collected.first().content === "cancel"){
                    return message.reply("Process Terminated!");
                }
                let reason = collected.first().content;
            
                //creates embed with all the info and sends the info to the specified channel
                let hEmbed = new RichEmbed()
                .setColor(config.colors.green)
                .setTitle("Hiatus Request")
                .addField("User", hUser)
                .addField("Join Date", joinDate)
                .addField("Day Requested", days)
                .addField("Reason", reason)
                .setTimestamp()

                let hChannel = message.guild.channels.find(c => c.name === "hiatus-alerts");
                hChannel.send(hEmbed)
                message.channel.bulkDelete(4);

                message.reply("Your request has been sent!");
            
            })
        
        })
    }
}