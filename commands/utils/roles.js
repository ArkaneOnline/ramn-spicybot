module.exports = {
    config: {
        name: "roles",
        aliases: [],
        description: "Scans every users roles in the server and updates them accordingly",
        usage: "",
        category: "utils"
    },
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
        let users = message.member;

        message.channel.send("Scanning and applying roles!");
        array.forEach(users => {
            let guest = message.guild.roles.find(`name`, "Guest")
            let clan = message.guild.roles.find(`name`, "RAMN")
            if(users.roles.has(clan)) users.removeRole(guest)
            if(!users.roles.has(clan)) users.addRole(guest)
            await(2000);
        });
        message.channel.send("Roles scanned and applied! Check `console.log()` for more info!");
    }
}