module.exports = {
    config: {
        name: "nick",
        aliases: ["nickname", "name"],
        description: "Change your server nickname using a text command",
        usage: "<new nickname>",
        category: "general"
    },
    run: async (client, message, args) => {
        //deletes the message
        await message.delete();
        //join the arguments together and store the value in a variable
        let name = args.join(" ");
        //get the current name of the user
        let oldName = message.member.nickname;
        //gets the id of the user and changes their nickname
        message.guild.members.get(message.member.id).setNickname(name, `User used nickname command changing their name from ${oldName} to ${name}`);
        message.reply(`Nickname successfully changed to \`${name}\` \nThis message will delete itself in 10 seconds!`).then(m => m.delete(10000));
        return;
    }
}