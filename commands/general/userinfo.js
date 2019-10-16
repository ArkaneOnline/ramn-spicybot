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
        if(!args[0]) let info = message.author;
        if(args[0]) let info = args[0];

        let uembed = new RichEmbed()
        .setTitle(`Info for ${info.username}`)
        .setColor(config.colors.purple)
        .setThumbnail(info.displayAvatarURL)
        .addField("Discord Tag", info.tag)
        .addField("Discord ID", info.id)
        .addField("Account Created", info.createdAt)
        .addField("Account Creation Timestamp", info.createdTimestamp)
        .addField("Last Message Sent", info.lastMessage)
        .addField("Presence", info.presence)
        .setFooter(`Info requested by: ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp()

        message.channel.send(uembed);
        return;
    }
}