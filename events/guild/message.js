//grabs the prefix from the config.json file
const config = require("../../config.json");

module.exports = async (client, message) => {
    //stops the code if the person who sent the message is a bot
    if (message.author.bot) return;
    //stops the code if you dm the bot
    if (message.channel.type === 'dm') return;


    if (message.guild.id === "511289361178820618") {
        //defines the "unregistered" role
        let unreg = message.guild.roles.find(x => x.name === "Unregistered");
        //checks if the role exists
        if (!unreg) return message.reply(`Fatal Error, \`Role doesn't exist\`, @Spicy Bot Developer`);
        //checks if the message author has the role, if they do, sends them a dm
        if (message.member.roles.had(unreg)) message.member.send(`Hello ${message.author}! \nIt seems like you are not registered with Charlemange in our server! We kindly ask that you register ASAP! \nTo do so, head over to the #commands channel, and type \`d!register\` to get started!`)
    }


    //defines the arguments and stores them in the args variable
    let args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    //grabs the command name from the arguments and makes it lowercase
    let cmd = args.shift().toLowerCase();

    //checks if the message starts with our prefix
    if (!message.content.startsWith(config.prefix)) return;
    //defines the command file by the name of the command we grabbed earlier
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    //logs the command to the console
    if (commandfile) console.log(`Command used: ${cmd}, with arguments: ${args}`)
    //runs the command file and passes the "client", "message", and "args" variables to the file
    if (commandfile) commandfile.run(client, message, args)
}