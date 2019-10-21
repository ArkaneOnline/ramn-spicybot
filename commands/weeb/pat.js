const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "pat",
        aliases: [],
        description: "Head pats for all!",
        usage: "(@user)",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let pat = await neko.sfw.pat();
        let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(puser){
            message.channel.send(`${puser}, ${message.author} sends you a virtual kiss! \n${pat.url}`);
        } else {
            message.channel.send(`I'll give you a virtual kiss! \n${pat.url}`);
        }

        return;
    }
}