//stores data from the packages in a variable
const { RichEmbed } = require("discord.js");
const config = require("../../config.json");
const moment = require("moment");

module.exports = {
    config: {
        name: "userinfo",
        aliases: ["accountinfo", "ui"],
        description: "Gets all available info from a users profile",
        usage: "(@user)",
        category: "general"
    },
    run: async (client, message, args) => {
        //stores a user that we ping into a variable
        let info = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        
        //checks if we pinged a user
        if(info){
            //creates an embed with all of the users information from the discord API
            let uEmbed = new RichEmbed()
            .setTitle(`Info for: ${info.displayName}`)
            .setColor(config.colors.purple)
            .setThumbnail(info.user.displayAvatarURL)
            .addField("Discord Tag", info.user.tag)
            .addField("Discord ID", info.id)
            .addField("Account Created", moment(info.user.createdAt).format("MMMM Do YYYY h:mm:ss a"))
            .addField("Joined Server", moment(info.joinedAt).format("MMMM Do YYYY h:mm:ss a"))
            .addField("Roles", info.roles.filter(r => r.id !== message.guild.id).map(roles => `${roles}`).join(" **|** ") || "No Roles")
            .addField("Status", info.presence.status)
            .setTimestamp()
            .setFooter(`Info requested by: ${message.member.displayName}`, message.member.user.displayAvatarURL)
            
            //send the embed to the current channel
            message.channel.send(uEmbed);
        
        //if they didn't ping a user, this will happen
        } else {
            //stores the author of the message into a variable
            let info = message.member;
            //created an embed with all of the users information from the discord API
            let uEmbed = new RichEmbed()
            .setTitle(`Info for: ${info.displayName}`)
            .setColor(config.colors.purple)
            .setThumbnail(info.user.displayAvatarURL)
            .addField("Discord Tag", info.user.tag)
            .addField("Discord ID", info.id)
            .addField("Account Created", moment(info.user.createdAt).format("MMMM Do YYYY h:mm:ss a"))
            .addField("Joined Server", moment(info.joinedAt).format("MMMM Do YYYY h:mm:ss a"))
            .addField("Roles", info.roles.filter(r => r.id !== message.guild.id).map(roles => `${roles}`).join(" **|** ") || "No Roles")
            .addField("Status", info.presence.status)
            .setTimestamp()
            .setFooter(`Info requested by: ${info.displayName}`, info.user.displayAvatarURL)

            //sends the message to the current channel
            message.channel.send(uEmbed);
        }

        //stops the code
        return;
    }
}