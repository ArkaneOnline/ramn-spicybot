module.exports = {
    config: {
        name: "botnick",
        aliases: [],
        description: "Changes the nickname of the bot",
        usage: "<new nickname>",
        category: "misc"
    },
    run: async (client, message, args) => {
        //deletes the last message
        await message.delete();
        //checks if the user has the admin permission, and if they don't, the code stops
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No.");
        //joins all the arguments together and sets them all into a variable
        let nick = args.join(" ");
        //gets the id of the bot and sets the nickname of the bot to the variable
        message.guild.members.get(client.user.id).setNickname(nick)
        return message.reply("Nickname changed!");
    }
}