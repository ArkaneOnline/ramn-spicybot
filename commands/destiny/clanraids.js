module.exports = {
    config: {
        name: "clanraids",
        aliases: ["cr"],
        description: "A command that gives/removes you from the Clan Raids role",
        usage: "",
        category: "destiny"
    },
    run: async (client, message, agrs) => {
        let clanrole = message.guild.roles.find(x => x.name === "Clan Raids");
        if(message.member.roles.has(clanrole.id)){
            message.member.removeRole(clanrole.id);
            message.reply(`I have removed the ${clanrole.name} role from you!`);
            return;
        } else {
            message.member.addRole(clanrole.id);
            message.reply(`I have added the ${clanrole.name} role to you!`);
            return;
        }
    }
}