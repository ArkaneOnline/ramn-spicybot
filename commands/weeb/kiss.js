//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
const neko = new client();

module.exports = {
    config: {
        name: "kiss",
        aliases: [],
        description: "Send a virtual kiss to someone!",
        usage: "(@user)",
        category: "weeb"
    },
    run: async (client, message, args) => {
        //defines json data into a variable
        let kiss = await neko.sfw.kiss();
        //defines a user that we ping as a variable
        let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        //checks if we specified a user
        if(kuser){
            //sends json data in a message as a link
            message.channel.send(`${kuser}, ${message.author} sends you a virtual kiss! \n${kiss.url}`);
        } else {
            //sends json data in a message as a link
            message.channel.send(`I'll give you a virtual kiss! \n${kiss.url}`);
        }

        //stops the code
        return;
    }
}