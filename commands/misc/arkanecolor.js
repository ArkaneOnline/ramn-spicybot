const { opUsers } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "arkanecolor",
        aliases: [],
        description: "Changes the color of Arkane in the Ramen Shop server",
        category: "misc"
    },
    run: async (client, message, args) => {
        let hrole = message.guild.roles.find(`name`, "Head Administrator");
        let rcolor = args[0];

        if(!message.member.roles.has(hrole.id)) return;
        else {
            hrole.setColor(rcolor, "Arkane requests a different color!");
            message.reply("Role color changed!");
        }
    }
}