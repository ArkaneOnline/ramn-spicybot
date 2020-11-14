const { Client, Collection } = require("discord.js");
const cron = require("cron");
const client = new Client();

let ramenShop = client.guilds.cache.get("511289361178820618");
let resetChannel = ramenShop.channels.cache.get("548999830048079875");
let announcementChannel - ramenShop.channels.cache.get("511922224727457804");

let xurMessage = new cron.CronJob('00 05 11 * * 5', () => {
    resetChannel.send("https://wherethefuckisxur.com");
}, null, true, 'America/Chicago');

let unregisteredMessage = new cron.CronJob('00 00 15 * * *', () => {
    let unregisteredRole = ramenShop.roles.cache.get("776988950929473596");
    announcementChannel.send(`${unregisteredRole}, please make sure you head over to #commands and type \`d!register\`. \nCharlemange will DM you with a link to link your Destiny and Discord accounts together!`);
}, null, true, 'America/Chicago');

xurMessage.start();
unregisteredMessage.start();

["commands", "aliases"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));

client.login(process.env.token);
