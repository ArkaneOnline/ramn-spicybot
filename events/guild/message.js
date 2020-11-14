const { prefix, colors } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    let messageEmbed = new MessageEmbed()
        .setTitle(`Error!`)
        .setDescription(`I cannot be used in DMs. \nIf you need to use me, go to The Spiciest Ramen Shop to do so. \nIf you are not a member of The Spiciest Ramen Shop, you do not need to interact with me.`)
        .setThumbnail(client.user.avatarURL({ format: "png", dynamic: true }))    
        .setColor(colors.darkblue);

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return message.channel.send(messageEmbed);

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();
    if(!args) args = null;

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) console.log(`Command used: ${cmd}, with Arguments: ${args}`);
    if(commandfile) commandfile.run(client, message, args);
}
