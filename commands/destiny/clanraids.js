const config = require("../../config.json");

module.exports = {
    config: {
        name: "clanraids",
        aliases: ["cr"],
        description: "A command that gives/removes you from the Clan Raids role",
        usage: "",
        category: "destiny"
    },
    run: async (client, message, args) => {
        //finds the roles with the name and sets the ID as a variable
        let clanRole = message.guild.roles.find(x => x.name === "Clan Raids");
        let memberRole = message.guild.roles.find(x => x.name === "RAMN")

        //checks if the roles exists
        if(!clanRole) return message.reply(`${config.importantIDs.staffIDs.arkane}, I have encountered an error that shouldn't ever happen! Command Name: \`${prefix}clanraids\`, Error message, \`Role doesn't exist\` \n${message.author}, Sorry for the inconvinience, my teams are getting to work right away!`);
        if(!memberRole) return message.reply(`${config.importantIDs.staffIDs.arkane}, I have encountered an error that shouldn't ever happen! Command Name: \`${prefix}clanraids\`, Error message, \`Role doesn't exist\` \n${message.author}, Sorry for the inconvinience, my teams are getting to work right away!`);

        //checks if members have the "RAMN" role, if they do, it skips this, if they don't, it says they need to get the RAMN role
        if(!message.member.roles.has(memberRole.id)) return message.reply("Only Clan Members may receive this role! \nIf you are a Clan Member, make sure you are registered with <@296023718839451649> (`d!register`) \nIf you are registered, please contact your clan leader for assistance!")

        //checks if the user has the "Clan Raids" role, and if they do, it removes the role, if they don't, it adds the role
        if(message.member.roles.has(clanRole.id)){
            message.member.removeRole(clanRole.id);
            message.reply(`I have removed the ${clanRole.name} role from you!`);
            return;
        } else {
            message.member.addRole(clanRole.id);
            message.reply(`I have added the ${clanRole.name} role to you!`);
            return;
        }
    }
}