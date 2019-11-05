//requires all the packages needed for this
const client = require("nekos.life");
//creates a new instance of a nekos.life api client
const neko = new client();

module.exports = {
    config: {
        name: "baka",
        aliases: [],
        description: "Baka!",
        usage: "",
        category: "weeb"
    },
    run: async (client, message, args) => {
        //defines json data into a variable
        let baka = await neko.sfw.baka();
        //sends json data as a link
        message.channel.send(`Baka! ${baka.url}`);

        //stops the code
        return;
    }
}