//stores data from packages in a variable
const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "patreon",
        aliases: ["donate"],
        description: "Sends a link to join my Patreon as well as thanks all of the current Patrons!",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        //waits for the message to be deleted before continuing
        await message.delete();

        //creates an embed with the following fields
        let patronEmbed = new RichEmbed()
        .setTitle("Patreon")
        .setDescription("https://www.patreon.com/niflonline")
        .setColor(config.colors.red)
        .setThumbnail(client.users.get(config.importantIDs.staffIDs.arkane).displayAvatarURL)
        .addField("> Noodle Tier Patrons", "None")
        .addField("> Cup Ramen Tier Patrons", "None")
        .addField("> Ramen Bowl Tier", "None")
        .addField("> Spicy Ramen Tier", "None")
        
        //sends the embed that was just created to the current channel 
        message.channel.send(patronEmbed);

        //stops the code
        return;
    }
}