const client = require("nekos.life");
const neko = new client();

module.exports = {
    config: {
        name: "cuddle",
        aliases: [],
        description: "Cuddle somebody!",
        usage: "(@user)",
        category: "weeb"
    },
    run: async (client, message, args) => {
        let cuddle = await neko.sfw.cuddle();
        let cuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(cuser){
            message.channel.send(`${cuser}, ${message.author} cuddles you! \n${cuddle.url}`);
        } else {
            message.channel.send(`I'll cuddle you! \n${cuddle.url}`);
        }

        return;
    }
}