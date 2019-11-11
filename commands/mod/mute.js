module.exports = {
    config: {
        name: "mute",
        aliases: [],
        description: "A command to prevent users from speaking in your server all together",
        usage: "<@user>",
        category: "mod"
    },
    run: async (client, message, args) => {
        //waits for the message to be deleted
        await message.delete();
        //gets the user who is being muted and stores them in a variable
        let muted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        //checks if you specified a user
        if(!muted) return message.reply("Tell me who to mute! `/mute @user`");
        //checks if you specified yourself
        if(muted.id === message.author.id) return message.reply("Can't mute them!");
        //checks if you have the manage message permission
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("I can't let you do that");
    
        //tries to overwrite permissions in each channel, if it fails, it logs the error
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
    
        //tells the user that the person was successfully muted
        message.reply(`${muted} has been muted!`);
        return;
    }
}