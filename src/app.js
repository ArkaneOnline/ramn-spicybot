const { Client, Intents, Collection} = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES]});
const fetch = require("node-fetch");

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

//twitter integration
//twitter configuration
const Twitter = require("twit");
const twitterConf = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
}
const twitterClient = new Twitter(twitterConf);
const destinationChannelID = "511922224727457804"
//end twitter configuration

const stream = twitterClient.stream("statuses/filter", {
    follow: '1440464833141301259',
});

stream.on("tweet", tweet => {
    if (tweet.retweeted_status
        || tweet.in_reply_to_status_id
        || tweet.in_reply_to_status_id_str
        || tweet.in_reply_to_user_id
        || tweet.in_reply_to_user_id_str
        || tweet.in_reply_to_screen_name) return;
    const twitterMessage = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    client.channels.cache.get(destinationChannelID).send(twitterMessage);
})
//end twitter integration

var timer = 10, interval = timer * 60 * 1000; //This checks every 10 minutes, change 10 to whatever minute you'd like
setInterval(function() {
	fetch("https://betteruptime.com/api/v1/heartbeat/VvUhsKD7Z72vkpAaHbpaegNc")
}, interval);

//continue this video from 2:30
//https://www.youtube.com/watch?v=HNH4V6Dhw6s