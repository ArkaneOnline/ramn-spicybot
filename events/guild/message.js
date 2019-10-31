const { prefix } = require("../../config.json");

module.exports = async (client, message) => {

    if(message.author.bot) return;
    
    if(message.channel.type === 'dm') return message.reply("You must use me in The Ramen Shop Server only!");

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client, message, args)

    let members = message.guild.members;
    members.forEach(members => {
        let clanrole = message.guild.roles.find(`name`, "RAMN");
        let guestrole = message.guild.roles.find(`name`, "Guest");
        if(members.user.bot) return;
        if(members.roles.has(clanrole)){
             members.removeRole(guestrole);
        } else if (members.roles.has(guestrole)) {
            return;
        } else {
            members.addRole(guestrole)
        }
    });
}