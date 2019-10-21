const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "tickle",
        aliases: [],
        description: "Tickle somebody!",
        usage: "(@user)",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let tickle = await neko.sfw.tickle();
        let tuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(tuser){
            message.channel.send(`${tuser}, ${message.author} tickles you! \n${tickle.url}`);
        } else {
            message.channel.send(`I'll tickle you! \n${tickle.url}`);
        }

        return;
    }
}