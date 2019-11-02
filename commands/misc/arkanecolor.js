module.exports = {
    config: {
        name: "arkanecolor",
        aliases: [],
        description: "Changes the color of Arkane in the Ramen Shop server",
        usage: "<hex color>",
        category: "misc"
    },
    run: async (client, message, args) => {
        message.delete();
        let hRole = message.guild.roles.find(`name`, "Head Administrator");
        let rColor = args[0];

        if(!message.member.roles.has(hRole.id)) return message.reply("No.");
        else {
            hRole.setColor(rColor, "Arkane requests a different color!");
            message.reply("Role color changed!");
        }
    }
}