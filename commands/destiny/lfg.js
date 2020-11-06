module.exports = {
    config: {
        name: "lfg",
        aliases: [],
        description: "Adds/Removes yourself from the <@&639567619774611476> role",
        usage: "",
        category: "destiny"
    },
    run: async (client, message, args) => {
        let lfgrole = message.guild.roles.cache.find(role => role.name === "LFG");

        if (!message.member.roles.cache.has(lfgrole.id)) {
            message.member.roles.remove(lfgrole, "Spicy Bot automatic role assign. Self Assigned user role.")
            message.reply("I have removed the `LFG` role from you!");
        }

        if (message.member.roles.cache.has(lfgrole.id)) {
            message.member.roles.add(lfgrole, "Spicy Bot automatic role assign. Self Assigned user role.")
            message.reply("I have added the `LFG` role to you!")
        }

        return;
    }
}