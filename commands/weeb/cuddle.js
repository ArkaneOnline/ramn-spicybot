//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
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
        //defines json data into a variable
        let cuddle = await neko.sfw.cuddle();
        //defines a user that we ping as a variable
        let cuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        //checks if we specified a user
        if(cuser){
            //sends json data in a message as a link
            message.channel.send(`${cuser}, ${message.author} cuddles you! \n${cuddle.url}`);
        } else {
            //sends json data in a message as a link
            message.channel.send(`I'll cuddle you! \n${cuddle.url}`);
        }

        //stops the code
        return;
    }
}