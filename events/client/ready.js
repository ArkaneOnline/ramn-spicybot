const { prefix } = require("../../config.json");
const package = require("../../package.json");

module.exports = async (client) => {
    client.user.setPresence({ activity: { name: `${prefix}help`}, status: "dnd" });
    console.log(`${client.user.username} is online!`);
    console.log(`${client.user.username} uses the following packages:`);
    console.log(package.dependencies);
}