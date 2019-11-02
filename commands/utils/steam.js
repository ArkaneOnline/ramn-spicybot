module.exports = {
    config: {
        name: "steam",
        aliases: ["link"],
        description: "A guide on how to link your Steam Profile to Discord",
        usage: "(@user)",
        category: "utils"
    },
    run: async (client, message, args) => {
        let pinguser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(pinguser){
            message.channel.send(`Hey ${pinguser}! As a requirement for our server, you must have your Steam account linked to your Discord account! \nBelow is a small tutorial on how to do it!`, {
                files: [{
                    attachment: "./assets/steamLink.png",
                    name: "steamLink.png"
                }]
            });
            return;
        } else {
            message.channel.send(`Hello! As a requirement for our server, you must have your Steam account linked to your Discord account! \nBelow is a small tutorial on how to do it!`, {
                files: [{
                    attachment: "./assets/steamLink.png",
                    name: "steamLink.png"
                }]
            });
            return;
        }
    }
}