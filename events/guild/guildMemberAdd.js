const { prefix } = require("../../config.json");

module.exports = async (client, member) => {
    const welcomeChannel = member.guild.channels.find(x => x.name === "welcome");
    const gettingStarted = member.guild.channels.find(x => x.name === "getting-started");
    if(!welcomeChannel) return;
    if(!gettingStarted) return;
    welcomeChannel.send(`Welcome to the server ${member}! \nPlease take a minute to look at the ${gettingStarted} channel to get setup!`);
    return;
}