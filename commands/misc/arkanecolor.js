const { opUsers } = require("../../config.json");

module.exports = {
    config: {
        name: "arkanecolor",
        aliases: [],
        description: "Changes the color of Arkane in the Ramen Shop server",
        category: "misc"
    },
    run: async (client, message, args) => {
        message.delete();
        let hrole = message.guild.roles.find(`name`, "Head Administrator");
        let rcolor = args[0];

        if(!message.member.roles.has(hrole.id)) return message.reply("No.");
        else {
            hrole.setColor(rcolor, "Arkane requests a different color!");
            message.reply("Role color changed!");
        }
    }
}