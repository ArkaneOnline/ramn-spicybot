module.exports = {
    config: {
        name: "clanraids",
        aliases: [],
        description: "Adds/Removes yourself from the <@&639549517452279810> role",
        usage: "clanraids",
        category: "destiny"
    },
    run: async (client, message, args) => {
        let clanraidrole = message.guild.roles.cache.find(role => role.name === "Clan Raids");

        if (!message.member.roles.cache.has(clanraidrole.id)) {
            message.member.roles.add(clanraidrole, "Spicy Bot automatic role assign. Self Assigned user role.")
            message.reply("I have added the `Clan Raids` role to you!");
        } else {
            message.member.roles.remove(clanraidrole, "Spicy Bot automatic role assign. Self Assigned user role.")
            message.reply("I have removed the `Clan Raids` role from you!")
        }

        return;
    }
}