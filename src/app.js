const { Client, Intents, Collection} = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.commands = new Collection();

require("dotenv").config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }

    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
    client.login(process.env.TOKEN);
})();

//continue this video from 2:30
//https://www.youtube.com/watch?v=HNH4V6Dhw6s