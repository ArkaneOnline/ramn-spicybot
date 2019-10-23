module.exports = {
    config: {
        name: "clear",
        aliases: ["purge", "prune", "delete"],
        description: "Deletes messages in bulk in the current channel",
        usage: "<number>",
        category: "mod"
    },
    run: async (client, message, args) => {
        await message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("I need the Manage Messages permission in order to do that!");
        if(!args[0]) return message.reply("I need to know how many messages you want me to clear!");
        if(args[0] >= 101) return message.reply("I can only clear up to 100 messages at a time! Thank you Discord API, Very Cool!");
    
        let number = args[0];
        message.channel.bulkDelete(args[0]);
        message.reply(`Cleared ${args[0]} messages! \nMessages older than 14 days old cannot be cleared`).then(msg => msg.delete(8000));
    }
}