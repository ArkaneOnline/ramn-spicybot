module.exports = async (client, member) => {
    //defines the #welcome channel
    const welcomeChannel = member.guild.channels.find(x => x.name === "welcome");
    //stores a bunch of values into one variable for later use
    const messages = [
        `**${member.user.username}** left!`,
        `**${member.user.username}**, Guardian Down!`,
        `**${member.user.username}** is gone!`,
        `**${member.user.username}** didn't turn back!`,
        `**${member.user.username}** has left your fireteam!`,
        `**${member.user.username}**, Error code: weasel!`,
        `**${member.user.username}** was hit with a drop pod!`,
        `**${member.user.username}** went to go solo Oryx!`,
        `**${member.user.username}** challenged the architects!`,
        `**${member.user.username}** found out what happens when you fall off The Tower!`
    ];
    //checks if the #welcome channel exists
    if(!welcomeChannel) return;
    //defines a message as a random value and selects the value from the array above
    const message = Math.floor(Math.random() * (messages.length - 1) + 1);
    //sends the random value to the #welcome channel
    welcomeChannel.send(messages[message]);
}