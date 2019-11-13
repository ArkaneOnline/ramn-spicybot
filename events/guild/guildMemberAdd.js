const { prefix } = require("../../config.json");

module.exports = async (client, member) => {
    //defines the #welcome channel
    const welcomeChannel = member.guild.channels.find(x => x.name === "welcome");
    //defines the #getting-started channel
    const gettingStarted = member.guild.channels.find(x => x.name === "getting-started");
    //checks if #welcome exists
    if(!welcomeChannel) return;
    //checks if #getting-started exists
    if(!gettingStarted) return;
    //sends a message to the #welcome channel
    welcomeChannel.send(`Welcome to the server ${member}! \nPlease take a minute to look at the ${gettingStarted} channel to get setup!`);
    //stops the code>
    return;
}