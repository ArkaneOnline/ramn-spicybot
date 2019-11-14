module.exports = {
    config: {
        name: "unreg",
        aliases: [],
        description: "A command that pings all unregistered users and tells them to register",
        usage: "",
        category: "utils"
    },
    run: async (client, message, args) => {
        //waits for the message to be deleted
        await message.delete();
        //checks if the user has the admin permission
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No.");
        //stores the unregistered role into a variable
        let unreg = message.guild.roles.find(r => r.name === "Unregistered");
        //checks if the unregistered role exists
        if(!unreg) return message.reply("Fatal error, `Role doesn't exist`, Command: `unreg`");
        //gets how many users have the unregistered role and stores them in a variable
        let count = unreg.members.size;

        //sends a message to the current channel telling everyone with the unregistered role to register
        message.channel.send(`${unreg} \nPlease make sure you head over to <#555615156306968576> and register (\`d!register\`) with <@296023718839451649>! \nThere are currently \`${count} unregistered users!\``);
        //stops the code
        return;
    }
}