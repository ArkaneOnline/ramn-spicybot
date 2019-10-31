module.exports = {
    config: {
        name: "lfg",
        aliases: [],
        description: "A command that gives/removes you from the LFG role",
        usage: "",
        category: "destiny"
    },
    run: async (client, message, agrs) => {
        let lfgrole = message.guild.roles.find(x => x.name === "LFG");
        if(message.member.roles.has(lfgrole.id)){
            message.member.removeRole(lfgrole.id);
            message.reply(`I have removed the ${lfgrole.name} role from you!`);
            return;
        } else {
            message.member.addRole(lfgrole.id);
            message.reply(`I have added the ${lfgrole.name} role to you!`);
            return;
        }
    }
}