module.exports = {
    config: {
        name: "say",
        aliases: [],
        description: "Says whatever you tell me to",
        usage: "<text>",
        category: "util"
    },
    run: async (client, message, args) => {
        let say = args.join(" ");
        if(!say) return message.reply("I need to know what you want me to say! `/help say`");

        await message.delete();
        message.channel.send(say);
        return;
    }
}