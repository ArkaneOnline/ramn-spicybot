//requires the packages that we installed with "npm i package=name"
const { Client, Collection } = require("discord.js");
const client = new Client();

//gets the name of the commands and all of their aliases from each of the command files and sets them equal to a new collection
["commands", "aliases"].forEach(x => client[x] = new Collection());

//defines the files we will be using while also passing in the "client" variable
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));

//logs the bot into discord with the token
client.login(process.env.token);