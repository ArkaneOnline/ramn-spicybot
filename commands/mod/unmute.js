module.exports = {
    config: {
        name: "unmute",
        aliases: [],
        description: "A command to allow users to speak again!",
        usage: "<@user>",
        category: "mod"
    },
    run: async (client, message, args) => {
        //inverse of the mute.js file
        await message.delete();
        let unmuted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!unmuted) return message.reply("Tell me who to unmute! `/unmute @user`");
        if(unmuted.id === message.author.id) return message.reply("Can't unmute them");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't let you do that");
    
        try{
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(unmuted, {
                    VIEW_CHANNEL: null,
                    SEND_MESSAGES: null,
                    ADD_REACTIONS: null,
                    CONNECT: null,
                    SPEAK: null
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    
        message.reply(`${unmuted} has been unmuted!`);
        return;
    }
}