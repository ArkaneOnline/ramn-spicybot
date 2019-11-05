//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
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
        //defines json data into a variable
        let slap = await neko.sfw.slap();
        //defines a user that we ping as a variable
        let suser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        //checks if we specified a user
        if(suser){
            //sends json data in a message as a link
            message.channel.send(`${suser}, ${message.author} slaps you! \n${slap.url}`);
        } else {
            //stops the code
            return;
        }

        //stops the code
        return;
    }
}