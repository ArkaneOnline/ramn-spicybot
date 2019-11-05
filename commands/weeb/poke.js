//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
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
        //defines json data into a variable
        let poke = await neko.sfw.poke();
        //defines a user that we ping as a variable
        let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        //checks if we specified a user
        if(puser){
            //sends json data in a message as a link
            message.channel.send(`${puser}, Poke! \n${poke.url}`);
        } else {
            //sends json data in a message as a link
            message.channel.send(`Poke! \n${poke.url}`);
        }

        //stops the code
        return;
    }
}