//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
const neko = new client();

module.exports = {
    config: {
        name: "smug",
        aliases: [],
        description: "smug",
        usage: "",
        category: "weeb"
    },
    run: async (client, message, args) => {
        //defines json data into a variable
        let smug = await neko.sfw.smug();
        //sends json data as a link
        message.channel.send(smug.url);

        //stops the code
        return;
    }
}