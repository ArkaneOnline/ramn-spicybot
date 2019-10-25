module.exports = {
    config: {
        name: "ban",
        aliases: [],
        description: "Bans a user on the spot",
        usage: "<@user> <reason>",
        category: "mod"
    },
    run: async (client, message, args) => {
        await message.delete();
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        let banned = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!banned) return message.reply("Tell me who to ban! `/ban @user reason`");
        if(banned.id === message.author.id) return message.reply("Can't ban yourself, sorry");
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("I need the Ban Members permission in order to do that!");
        let banreason = args.join(" ").slice(22);
        if(!banreason) return message.reply("Tell me why I am banning this person! `/ban @user reason`");
        if(banned.hasPermission("ADMINISTRATOR")) return message.reply("This person is too important to ban!");
        if(banned.bannable() === true) return message.reply("Can't ban 'em, and I don't know why?");
    
        banned.send(`You have been banned from **${message.channel.guild.name}** for the reason: **${banreason}**`);
        await delay(500);
        message.reply("User banned!");
        message.guild.member(banned).ban(banreason);
        return;
    }
}