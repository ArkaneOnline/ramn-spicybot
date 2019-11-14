//grabs the prefix from the config.json file
const { prefix } = require("../../config.json");

module.exports = async (client, message) => {
    //stops the code if the person who sent the message is a bot
    if (message.author.bot) return;
    //stops the code if you dm the bot
    if (message.channel.type === 'dm') return;

    //defines the arguments and stores them in the args variable
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    //grabs the command name from the arguments and makes it lowercase
    let cmd = args.shift().toLowerCase();

    //checks if the message starts with our prefix
    if (!message.content.startsWith(prefix)) return;
    //defines the command file by the name of the command we grabbed earlier
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    //logs the command to the console
    if (commandfile) console.log(`Command used: ${cmd}, with arguments: ${args}`)
    //runs the command file and passes the "client", "message", and "args" variables to the file
    if (commandfile) commandfile.run(client, message, args)
}