const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "hug",
        aliases: [],
        description: "Send a virtual hug to someone!",
        usage: "(@user)",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let hugurl = await neko.sfw.hug();
        let huser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`${huser}, ${message.author} sends you a virtual hug! \n${hugurl.url}`);
        } else {
            message.channel.send(`I'll give you a virtual hug! \n${hugurl.url}`);
        }

        return;
    }
}