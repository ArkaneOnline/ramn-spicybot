module.exports = {
    config: {
        name: "botnick",
        aliases: [],
        description: "Changes the nickname of the bot",
        category: "misc"
    },
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No.");
        let nick = args.join(" ");
        message.guild.members.get(client.user.id).setNickname(nick)
        return message.reply("Nickname changed!");
    }
}