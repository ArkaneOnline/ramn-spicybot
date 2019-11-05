//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
const neko = new client();

module.exports = {
    config: {
        name: "hug",
        aliases: [],
        description: "Send a virtual hug to someone!",
        usage: "(@user)",
        category: "weeb"
    },
    run: async (client, message, args) => {
        //defines json data into a variable
        let hugurl = await neko.sfw.hug();
        //defines a user that we ping as a variable
        let huser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        //checks if we specified a user
        if(huser){
            //sends json data in a message as a link
            message.channel.send(`${huser}, ${message.author} sends you a virtual hug! \n${hugurl.url}`);
        } else {
            //sends json data in a message as a link
            message.channel.send(`I'll give you a virtual hug! \n${hugurl.url}`);
        }

        //stops the code
        return;
    }
}