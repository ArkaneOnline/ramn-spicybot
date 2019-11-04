module.exports = {
    config: {
        name: "d2updates",
        aliases: ["d2"],
        description: "A command that gives/removes you from the D2 Updates role",
        usage: "",
        category: "destiny"
    },
    run: async (client, message, args) => {
        //adds the "D2 Updates" role as a variable by finding the ID by name
        let d2role = message.guild.roles.find(x => x.name === "D2 Updates");
        
        //checks if the user has the role, and if they do, it removes it, otherwise, it adds it
        if(message.member.roles.has(d2role.id)){
            message.member.removeRole(d2role.id);
            message.reply(`I have removed the ${d2role.name} role from you!`);
            return;
        } else {
            message.member.addRole(d2role.id);
            message.reply(`I have added the ${d2role.name} role to you!`);
            return;
        }
    }
}