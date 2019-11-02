const { prefix } = require("../../config.json");

module.exports = {
    config: {
        name: "say",
        aliases: [],
        description: "Says whatever you tell me to",
        usage: "<text>",
        category: "util"
    },
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
        let say = args.join(" ");
        if(!say) return message.reply(`I need to know what you want me to say! \`${prefix}help say\``);

        await message.delete();
        message.channel.send(say);
        return;
    }
}