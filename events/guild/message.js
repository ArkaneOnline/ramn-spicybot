const { prefix } = require("../../config.json");

module.exports = async (client, message) => {

    if(message.author.bot) return;
    
    if(message.channel.type === 'dm') return message.reply("You must use me in The Ramen Shop Server only!");

    let members = message.guild.members;
    members.forEach(member => {
        let clanrole = message.guild.roles.find(`name`, "RAMN");
        let guestrole = message.guild.roles.find(`name`, "Guest");
        if(member.user.bot) return;
        if(member.roles.has(clanrole)){
            if(member.roles.has(guestrole)){
                member.removeRole(guestrole)
            } else {
                return;
            }
        }
        if(!member.roles.has(clanrole)){
            if(member.roles.has(guestrole)){
                return;
            } else {
                member.addRole(guestrole)
            }
        }
    });

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client, message, args)
}