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
        const list = client.guilds.get("511289361178820618");

        message.channel.send("Scanning and applying roles!");
        list.members.forEach(member => {
            setTimeout(function() {console.log("Waiting for 2 seconds!"); }, 2000)
            let guest = message.guild.roles.find(`name`, "Guest")
            let clan = message.guild.roles.find(`name`, "RAMN")
            if(member.roles.has(clan)) member.removeRole(guest)
            if(!member.roles.has(clan)) member.addRole(guest)
        })
        message.channel.send("Roles scanned and applied! Check `console.log()` for more info!");
    }
}