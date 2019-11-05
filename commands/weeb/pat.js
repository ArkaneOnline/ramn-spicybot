//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
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
        //defines json data into a variable
        let pat = await neko.sfw.pat();
        //defines a user that we ping as a variable
        let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        //checks if we specified a user
        if(puser){
            //sends json data in a message as a link
            message.channel.send(`${puser}, ${message.author} sends you a virtual head pat! \n${pat.url}`);
        } else {
            //sends json data in a message as a link
            message.channel.send(`I'll give you a virtual head pat! \n${pat.url}`);
        }

        //stops the code
        return;
    }
}