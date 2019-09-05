module.exports = {
    config: {
        name: "mute",
        aliases: [],
        description: "A command to prevent users from speaking in your server all together",
        category: "mod"
    },
    run: async (client, message, args) => {
        await message.delete();
        let muted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!muted) return message.reply("Tell me who to mute! `/mute @user`");
        if(muted.id === message.author.id) return message.reply("Can't mute them!");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("I can't let you do that");
    
        try{
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muted, {
                    VIEW_CHANNEL: null,
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    CONNECT: true,
                    SPEAK: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    
        message.reply("User has been muted!");
        return;
    }
}