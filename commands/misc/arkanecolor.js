module.exports = {
    config: {
        name: "arkanecolor",
        aliases: [],
        description: "Changes the color of Arkane in the Ramen Shop server",
        usage: "<hex color>",
        category: "misc"
    },
    run: async (client, message, args) => {
        //deletes the message that was just sent
        await message.delete();
        //finds the head admin role and stores it in a variable
        let hRole = message.guild.roles.find(r => r.name === "Head Administrator");
        //stores the hex value as a variable
        let rColor = args[0];

        //checks if the user has the head admin role
        //if they don't it tells them no
        if(!message.member.roles.has(hRole.id)) return message.reply("No.");
        else {
            //if they do, it sets the color of the role to the argument and puts a message into the audit logs
            hRole.setColor(rColor, "Arkane requests a different color!");
            message.reply("Role color changed!");
        }
        return;
    }
}