//stores package data into variables
const { RichEmbed } = require("discord.js");
const config = require("../../config.json");
const moment = require("moment");

module.exports = {
    config: {
        name: "serverinfo",
        aliases: ["guildinfo", "si", "gi"],
        description: "A command to display the info of the current server",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        //creates an embed with all the information about the current server
        let serverEmbed = new RichEmbed()
        .setTitle(message.guild.name)
        .setColor(config.colors.yellow)
        .setThumbnail(message.guild.iconURL)
        .setURL("https://invite.gg/ramenshop")
        .addField("Server ID", message.guild.id)
        .addField("Created on", moment(message.guild.createdAt).format("MMMM Do YYYY h:mm:ss a"))
        .addField("Member count", message.guild.memberCount)
        .addField("Owner", message.guild.owner)
        .addField("Server Region", message.guild.region)
        .setTimestamp()
        .setFooter(`Info requested by: ${message.author.username}`, message.author.displayAvatarURL)

        //sends the embed to the current channel
        message.channel.send(serverEmbed);
        
        //stops the code
        return;
    }
}