module.exports = {
    config: {
        name: "d2updates",
        aliases: [],
        description: "Adds/Removes yourself from the <@&639549517452279810> role",
        usage: "(none)",
        category: "destiny"
    },
    run: async (client, message, args) => {
        let d2role = message.guild.roles.cache.find(role => role.name === "D2 Updates");

        if (!message.member.roles.cache.has(d2role.id)) {
            message.member.roles.add(d2role, "Spicy Bot automatic role assign. Self Assigned user role.")
            message.reply("I have added the `D2 Updates` role to you!");
        } else {
            message.member.roles.remove(d2role, "Spicy Bot automatic role assign. Self Assigned user role.")
            message.reply("I have removed the `D2 Updates` role from you!")
        }

        return;
    }
}