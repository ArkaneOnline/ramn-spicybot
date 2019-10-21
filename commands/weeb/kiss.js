const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "kiss",
        aliases: [],
        description: "Send a virtual kiss to someone!",
        usage: "(@user)",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let kiss = await neko.sfw.kiss();
        let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(kuser){
            message.channel.send(`${kuser}, ${message.author} sends you a virtual kiss! \n${kiss.url}`);
        } else {
            message.channel.send(`I'll give you a virtual kiss! \n${kiss.url}`);
        }

        return;
    }
}