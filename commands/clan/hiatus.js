const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "hiatus",
        aliases: [],
        descpription: "A command that will tell us when you are on leave from the clan for an extended period of time",
        usage: "none",
        category: "clan"
    },
    run: async (client, message, args) => {
        message.delete();
        //gather basic info on the user
        let huser = message.author;
        if (!message.member.roles.find(r => r.name === "RAMN")) return message.reply("This command can only be used by clan members!");
        let joindate = message.member.joinedAt;

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
        
            //edtis the message
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
                let hembed = new Discord.RichEmbed()
                .setColor(config.colors.green)
                .setTitle("Hiatus Request")
                .addField("User", huser)
                .addField("Join Date", joindate)
                .addField("Day Requested", days)
                .addField("Reason", reason)
                .setTimestamp()

                let hchannel = message.guild.channels.find(`name`, "hiatus-alerts");
                hchannel.send(hembed)
                message.channel.bulkDelete(4);

                message.reply("Your request has been sent!");
            
            })
        
        })
    }
}