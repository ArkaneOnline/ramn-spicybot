//stores data from packages in a variable
const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "changelog",
        aliases: ["patch", "patchnotes"],
        description: "View a list of the most recent changes to the bot",
        usage: "",
        category: "general"
    },  
    run: async (client, message, args) => {
        //deletes the message and waits for the message to be deleted
        await message.delete();

        //creates a new embed with all of the following information
        let changes = new RichEmbed()
        .setColor(config.colors.green)
        .setTitle("Changelog 11/1/19")
        .setURL("https://github.com/ArkaneOnline/spicybot/commits/master")
        .setThumbnail(client.user.displayAvatarURL)
        .addField("Added the `lfg` command", "Check `/help lfg` for more information")
        .addField("Added the `clanraids` command", "Check `/help clanraids` for more information")
        .addField("Added some developer QOL fixes", "This change was to fix my sloppy code so that it is readable by my new developer friends")
        .addField("Offsite stuff", "I am currently working on implementing database functionality which will get us our very own level system and other things that require data storage. Stay tuned for that!")
        .addField("I've got 2 new developer friends", "<@199287778226339841> and <@271076489024372737> are working with me to help make me even better!")
        .addBlankField(true)
        .addField("Side note", "If you like Spicy Bot, or our server, you can show your support by donating (`/patreon`) and obtain a special donator role!")
        .setFooter("Proudly made by: The RAMN Team", client.user.avatarURL)

        //sends the embed to the current channel
        message.channel.send(changes);

        //stops the code
        return;
    }
}