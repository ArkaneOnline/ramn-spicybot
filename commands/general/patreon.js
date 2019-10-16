import { RichEmbed } from "discord.js";

export const config = {
    name: "patreon",
    aliases: [],
    description: "Sends a link to join my Patreon as well as thanks all of the current Patrons!",
    usage: "",
    category: "general"
};
export async function run(client, message, args) {
    await message.delete();
    let patronembed = new RichEmbed()
    .setTitle("Patreon")
    .setDescription("https://www.patreon.com/niflonline")
    .addField("> Noodle Tier Patrons", "None")
    .addField("> Cup Ramen Tier Patrons", "None")
    .addField("> Ramen Bowl Tier", "None")
    .addField("> Spicy Ramen Tier", "None")
    message.channel.send(patronembed);

    return;

}