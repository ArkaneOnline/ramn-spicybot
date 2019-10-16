const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "userinfo",
        aliases: [],
        description: "Gets all avaliable info from a users profile",
        usage: "(@user)",
        category: "general"
    },
    run: async (client, message, args) => {
        let info = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!info){
            let info = message.author;
            let uembed = new RichEmbed()
            .setTitle(`Info for ${info.username}`)
            .setColor(config.colors.purple)
            .setThumbnail(info.displayAvatarURL)
            .addField("Discord Tag", info.tag)
            .addField("Discord ID", info.id)
            .addField("Account Created", info.createdAt)
            .addField("Last Message Sent", info.lastMessage)
            .addField("Presence", info.presence.status)
            .setFooter(`Info requested by: ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp()

            message.channel.send(uembed);
        }

        if(info){
            let uembed = new RichEmbed()
            .setTitle(`Info for ${info.username}`)
            .setColor(config.colors.purple)
            .setThumbnail(info.displayAvatarURL)
            .addField("Discord Tag", info.tag)
            .addField("Discord ID", info.id)
            .addField("Account Created", info.createdAt)
            .addField("Last Message Sent", info.lastMessage)
            .addField("Presence", info.presence.status)
            .setFooter(`Info requested by: ${message.author.username}`, message.author.displayAvatarURL)
            .setTimestamp()

            message.channel.send(uembed);
        }

        
        return;
    }
}