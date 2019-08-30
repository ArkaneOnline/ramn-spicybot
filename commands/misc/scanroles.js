module.exports = {
    config: {
        name: "scanroles",
        aliases: [],
        description: "A command that will scan all of the users roles",
        category: "misc"
    },
    run: async (client, message, args) => {
        await message.delete();

        message.channel.send("Scanning process initiated...");

        //scanning code here
        let clan1role = message.guild.roles.find(`name`, "Clan 1 Member");
        let clan2role = message.guild.roles.find(`name`, "Clan 2 Member");
        let guestrole = message.guild.roles.find(`name`, "Guest");

        const ramenshop = client.guilds.get("511289361178820618");
        ramenshop.members.forEach(member => {
            if(member.user.bot) return;
            if(member.roles.has(clan1role)) member.removeRole(guestrole);
            if(member.roles.has(clan2role)) member.removeRole(guestrole);
            if(!member.roles.has(clan1role)) member.addRole(guestrole)
            if(!member.roles.has(clan2role)) member.addRole(guestrole)
        }, 2000)

        message.channel.send("Scanning process complete!");
    }
}