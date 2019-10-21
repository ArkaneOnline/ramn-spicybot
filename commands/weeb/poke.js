const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "poke",
        aliases: [],
        description: "Poke somebody!",
        usage: "<@user>",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let poke = await neko.sfw.poke();
        let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(puser){
            message.channel.send(`${puser}, ${message.author} sends you a virtual head pat! \n${poke.url}`);
        } else {
            message.channel.send(`I'll give you a virtual head pat! \n${poke.url}`);
        }

        return;
    }
}