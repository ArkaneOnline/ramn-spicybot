module.exports = {
    config: {
        name: "clear",
        aliases: ["purge", "prune", "delete"],
        description: "Deletes messages in bulk in the current channel",
        usage: "<number>",
        category: "mod"
    },
    run: async (client, message, args) => {
        //waits for the latest message to be deleted
        await message.delete();
        //checks if the user has the manage message permission
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("I need the Manage Messages permission in order to do that!");
        //checks if the user specified a number
        if(!args[0]) return message.reply("I need to know how many messages you want me to clear!");
        //checks if the number is above 100
        if(args[0] >= 101) return message.reply("I can only clear up to 100 messages at a time! Thank you Discord API, Very Cool!");
    
        //stores the number in a variable
        let number = args[0];
        //deletes the messages specified
        message.channel.bulkDelete(number, true);
        //lets us know the messages have been deleted, then deletes itself
        message.reply(`Cleared ${number} messages!`).then(msg => msg.delete(8000));
    }
}