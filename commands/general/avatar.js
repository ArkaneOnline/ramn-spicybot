module.exports = {
    config: {
        name: "avatar",
        aliases: ["icon", "pfp", "profilepic"],
        description: "Allows you to view you or another users avatar",
        usage: "(@user)",
        category: "general"
    },
    run: async (client, message, args) => {
        //stores the user that you pinged in a variable
        let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        
        //checks if you pinged somebody, if you did, it displays their avatar, otherwise, it displays you avatar
        if(aUser){
            let userURL = aUser.user.avatarURL;
            message.channel.send(`Here is a link to ${aUser}'s avatar: ${userURL}`);
        } else {
            let yourURL = message.author.avatarURL;
            message.channel.send(`Here is a link to your avatar: ${yourURL}`);
        }
    
        //stops the code in its tracks
        return;
    }
}