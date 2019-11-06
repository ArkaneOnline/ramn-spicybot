const { prefix } = require("../../config.json");

module.exports = async (client, member) => {
    const welcomeChannel = member.guild.channels.find(x => x.name === "welcome");
    const messages = [
        `${member.username} left!`,
        `${member.username}, Guardian Down!`,
        `${member.username} is gone!`
    ];
    if(!welcomeChannel) return;
    const message = Math.floor(Math.random() * (messages.length - 1) + 1);
    welcomeChannel.send(messages[message]);
}