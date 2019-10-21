const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "slap",
        aliases: [],
        description: "Slap somebody for being a fucking idiot!",
        usage: "<@user>",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let slap = await neko.sfw.slap();
        let suser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(suser){
            message.channel.send(`${suser}, ${message.author} slaps you! \n${slap.url}`);
        } else {
            return;
        }

        return;
    }
}