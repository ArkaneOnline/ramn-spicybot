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
        //checks if the user has the manage messages permission
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
        //joins and stores the arguments in a variable
        let say = args.join(" ");
        //checks if you specified an argument
        if(!say) return message.reply(`I need to know what you want me to say! \`${prefix}help say\``);

        //deletes your message
        await message.delete();
        //sends what you said
        message.channel.send(say);
        //stops the code
        return;
    }
}