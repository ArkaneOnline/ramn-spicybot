module.exports = {
    config: {
        name: "steam",
        aliases: ["link"],
        description: "A guide on how to link your Steam Profile to Discord",
        usage: "(@user)",
        category: "utils"
    },
    run: async (client, message, args) => {
        //stores the person you pinged in a variable
        let pinguser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        //checks if you pinged somebody
        if(pinguser){
            //if you did, it sends a message pinging the person you pinged
            message.channel.send(`Hey ${pinguser}! As a requirement for our server, you must have your Steam account linked to your Discord account! \nBelow is a small tutorial on how to do it!`, {
                files: [{
                    attachment: "./assets/steamLink.png",
                    name: "steamLink.png"
                }]
            });
            //stops the code
            return;
        } else {
            //if you didn't, sends the message without pinging the user
            message.channel.send(`Hello! As a requirement for our server, you must have your Steam account linked to your Discord account! \nBelow is a small tutorial on how to do it!`, {
                files: [{
                    attachment: "./assets/steamLink.png",
                    name: "steamLink.png"
                }]
            });
            //stops the code
            return;
        }
    }
}