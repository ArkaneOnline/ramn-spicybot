//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
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
        //defines json data into a variable
        let tickle = await neko.sfw.tickle();
        //defines a user that we ping as a variable
        let tuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        //checks if we specified a user
        if(tuser){
            //sends json data in a message as a link
            message.channel.send(`${tuser}, ${message.author} tickles you! \n${tickle.url}`);
        } else {
            //sends json data in a message as a link
            message.channel.send(`I'll tickle you! \n${tickle.url}`);
        }

        //stops the code
        return;
    }
}