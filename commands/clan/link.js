module.exports = {
    config: {
        name: "link",
        aliases: [],
        description: "A guide on how to link your Steam Profile to Discord",
        category: "clan"
    },
    run: async (client, message, args) => {
        let pinguser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        message.channel.send(`Hey ${pinguser}! As a requirement for our server, you must have your Steam account linked to your Discord account! \nBelow is a small tutorial on how to do it!`, {
            files: [{
                attachment: "../../assets/steamLink.png",
                name: "steamLink.png"
            }]
        });
        return;
    }
}