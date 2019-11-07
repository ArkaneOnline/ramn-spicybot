const { prefix } = require("../../config.json");

module.exports = async (client, member) => {
    const welcomeChannel = member.guild.channels.find(x => x.name === "welcome");
    const messages = [
        `**${member.user.username}** left!`,
        `**${member.user.username}**, Guardian Down!`,
        `**${member.user.username}** is gone!`,
        `**${member.user.username}** didn't turn back!`,
        `**${member.user.username}** has left your fireteam!`,
        `**${member.user.username}**, Error code: weasel!`,
        `**${member.user.username}** was hit with a drop pod!`,
        `**${member.user.username}** went to go solo Oryx!`,
        `**${member.user.username}** challenged the architects!`
    ];
    if(!welcomeChannel) return;
    const message = Math.floor(Math.random() * (messages.length - 1) + 1);
    welcomeChannel.send(messages[message]);
}