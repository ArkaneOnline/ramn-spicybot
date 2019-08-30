module.exports = {
    config: {
        name: "kick",
        aliases: [],
        description: "Kicks a user from the server on the spot",
        category: "mod"
    },
    run: async (client, message, args) => {
        await message.delete();
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        let kicked = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kicked) return message.reply("Tell me who to kick! `/kick @user reason`");
        if(kicked.id === message.author.id) return message.reply("Can't kick yourself, sorry bud! Leaving the server is always an option!");
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("I need the Kick Members permission to do that!");
        let kickreason = args.join(" ").slice(22);
        if(!kickreason) return message.reply("Give me a reason why they are being kicked! `/kick @user reason`");
        if(kicked.hasPermission("ADMINISTRATOR")) return message.reply("Can't kick 'em, they just seem too important!");
        if(!kicked.kickable()) return message.reply("For some reason, this user isn't kickable?");
    
        kicked.send(`You have been kicked from **${message.channel.guild.name}** for the reason: **${kickreason}**`)
        await delay(500);
        message.reply("User kicked!");
        message.guild.member(kicked).kick(kickreason);
        return;
    }
}