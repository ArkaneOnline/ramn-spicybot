const config = require("../../config.json");

module.exports = {
    config: {
        name: "send",
        aliases: [],
        description: "Sends a message to a user",
        category: "moderation"
    },
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Insufficient Permissions: Administrator");
        if(!args[0]) return message.reply(`Incorrect Usage: \`${prefix}send @user message\``);

        let sentto = client.users.cache.get(message.mentions.users.first().id || args[0]);
        let sendmessage = args.join(" ").slice(22);
        sentto.send(sendmessage);

        return message.reply("Your message has been sent!");
    }
}