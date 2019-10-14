module.exports = {
    config: {
        name: "unreg",
        aliases: [],
        description: "A command that pings all unregistered users and tells them to register",
        category: "utils"
    },
    run: async (client, message, args) => {
        await message.delete();
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No.");
        let unreg = message.guild.roles.find(`name`, "Unregistered");

        message.channel.send(`${unreg} \nPlease make sure you head over to <#555615156306968576> and register (\`d!register\`) with <@296023718839451649>!`);
        return;
    }
}