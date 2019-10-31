const { prefix } = require("../../config.json");

module.exports = async (client, message) => {

    if(message.author.bot) return;
    
    if(message.channel.type === 'dm') return message.reply("You must use me in The Ramen Shop Server only!");

    let members = message.guild.members;
    let clanrole = message.guild.roles.find(x => x.name === "RAMN");
    let guestrole = message.guild.roles.find(x => x.name === "Guest");
    members.forEach(member => {
        if(member.roles.has(clanrole)){
            if(member.roles.has(guestrole)){
                member.removeRole(guestrole)
            } else {
                return;
            }
        }
    });

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client, message, args)
}