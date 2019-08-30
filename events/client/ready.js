const Discord = require("discord.js");
const { prefix } = require("../../config.json");

module.exports = async (client, message) => {
    console.log(`${client.user.username} is online! \nThe Ramen Shop has ${client.users.size} users!`);
    client.user.setPresence({ game: { name: `${prefix}help | Spicy Bot 2: Electric Boogaloo`}, status: "dnd" });
}