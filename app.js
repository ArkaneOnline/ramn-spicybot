const { Client, Collection } = require("discord.js");
const cron = require("cron");
const client = new Client();

let xurMessage = new cron.CronJob('00 05 12 * * 5', () => {
    let ramenShop = client.guilds.cache.get("511289361178820618");
    let resetChannel = ramenShop.channels.cache.get("548999830048079875");

    resetChannel.send("https://wherethefuckisxur.com");
}, null, true, 'America/Chicago');

xurMessage.start();

["commands", "aliases"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));

client.login(process.env.token);