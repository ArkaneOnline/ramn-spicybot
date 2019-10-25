const { RichEmbed } = require("discord.js");
const config = require("../../config.json");
const moment = require("moment");

module.exports = {
    config: {
        name: "userinfo",
        aliases: ["accountinfo", "ui"],
        description: "Gets all avaliable info from a users profile",
        usage: "(@user)",
        category: "general"
    },
    run: async (client, message, args) => {
        let info = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(info){
            let uembed = new RichEmbed()
            .setTitle(`Info for: ${info.displayName}`)
            .setColor(config.colors.purple)
            .setThumbnail(info.user.displayAvatarURL)
            .addField("Discord Tag", info.user.tag)
            .addField("Discord ID", info.id)
            .addField("Account Created", moment(info.user.createdAt).format("MMMM Do YYYY h:mm:ss a"))
            .addField("Joined Server", moment(info.joinedAt).format("MMMM Do YYYY h:mm:ss a"))
            .addField("Roles", info.roles.map(r => `${r}`).join(" | "), true)
            .addField("Status", info.presence.status)
            .setTimestamp()
            .setFooter(`Info requested by: ${message.member.displayName}`, message.member.user.displayAvatarURL)
        
            message.channel.send(uembed);
        } else {
            let info = message.member;
            let uembed = new RichEmbed()
            .setTitle(`Info for: ${info.displayName}`)
            .setColor(config.colors.purple)
            .setThumbnail(info.user.displayAvatarURL)
            .addField("Discord Tag", info.user.tag)
            .addField("Discord ID", info.id)
            .addField("Account Created", moment(info.user.createdAt).format("MMMM Do YYYY h:mm:ss a"))
            .addField("Joined Server", moment(info.joinedAt).format("MMMM Do YYYY h:mm:ss a"))
            .addField("Roles", info.roles.map(r => `${r}`).join(" | "), true)
            .addField("Status", info.presence.status)
            .setTimestamp()
            .setFooter(`Info requested by: ${info.displayName}`, info.user.displayAvatarURL)

            message.channel.send(uembed);
        }

        return;
    }
}