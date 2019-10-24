const { prefix } = require("../../config.json");

module.exports = async (client, message) => {

    if(message.author.bot) return;
    
    if(message.channel.type === 'dm') return message.reply("You must use me in The Ramen Shop Server only!");

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client, message, args)
}