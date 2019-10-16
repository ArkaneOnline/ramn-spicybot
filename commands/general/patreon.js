const { RichEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
    config: {
        name: "patreon",
        aliases: [],
        description: "Sends a link to join my Patreon as well as thanks all of the current Patrons!",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        await message.delete();
        let patronembed = new RichEmbed()
        .setTitle("Patreon")
        .setDescription("https://www.patreon.com/niflonline")
        .setColor(config.colors.red)
        .addField("> Noodle Tier Patrons", "None")
        .addField("> Cup Ramen Tier Patrons", "None")
        .addField("> Ramen Bowl Tier", "None")
        .addField("> Spicy Ramen Tier", "None")
        message.channel.send(patronembed);

        return;
    }
}