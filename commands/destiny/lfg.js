module.exports = {
    config: {
        name: "lfg",
        aliases: [],
        description: "A command that gives/removes you from the LFG role",
        usage: "",
        category: "destiny"
    },
    run: async (client, message, args) => {
        //stores the "LFG" role into a variable
        let lfgRole = message.guild.roles.find(x => x.name === "LFG");

        //checks if role exists
        if(!lfgRole) return message.reply(`${config.importantIDs.staffIDs.arkane}, I have encountered an error that shouldn't ever happen! Command Name: \`${prefix}lfg\`, Error message, \`Role doesn't exist\` \n${message.author}, Sorry for the inconvinience, my teams are getting to work right away!`);
        
        //checks if a user has the "LFG" role, and if they do, it removes it, otherwise, it adds it
        if(message.member.roles.has(lfgRole.id)){
            message.member.removeRole(lfgRole.id);
            message.reply(`I have removed the ${lfgRole.name} role from you!`);
            return;
        } else {
            message.member.addRole(lfgRole.id);
            message.reply(`I have added the ${lfgRole.name} role to you!`);
            return;
        }
    }
}