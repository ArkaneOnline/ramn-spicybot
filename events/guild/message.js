const { prefix } = require("../../config.json");

module.exports = async (client, message) => {

    if(message.author.bot) return;
    
    if(message.channel.type === 'dm') return message.reply("You must use me in The Ramen Shop Server only!");

    let members = message.guild.members;
    members.forEach(member => {
        let clanrole = message.guild.roles.find(x => x.name === "RAMN");
        if(member.user.bot) return;
        if(member.roles.has(clanrole)){
            if(member.roles.has(message.guild.roles.find(x => x.name === "Guest"))){
                member.removeRole(message.guild.roles.find(x => x.name === "Guest"))
            } else {
                return;
            }
        }
        if(!member.roles.has(clanrole)){
            if(member.roles.has(message.guild.roles.find(x => x.name === "Guest"))){
                return;
            } else {
                member.addRole(message.guild.roles.find(x => x.name === "Guest"))
            }
        }
    });

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client, message, args)
}