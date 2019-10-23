const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "serverinfo",
        aliases: ["guildinfo"],
        description: "A command to display the info of the current server",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        let serverembed = new RichEmbed()
        .setTitle(message.guild.name)
        .setColor(config.colors.yellow)
        .setThumbnail(message.guild.iconURL)
        .setURL("https://invite.gg/ramenshop")
        .addField("Server ID", message.guild.id)
        .addField("Created on", message.guild.createdAt)
        .addField("Member count", message.guild.memberCount)
        .addField("Owner", message.guild.owner)
        .addField("Server Region", message.guild.region)
        .setTimestamp()
        .setFooter(`Info requested by: ${message.author.username}`, message.author.displayAvatarURL)

        message.channel.send(serverembed);
    }
}