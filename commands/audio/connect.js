//require ffmpeg
const ffmpeg = require("ffmpeg");

module.exports = {
    config: {
        name: "connect",
        aliases: [],
        description: "Connects the bot to the current voice channel",
        usage: "",
        category: "audio"
    },
    run: async (client, message, args) => {
        //stores the voice channel name in a variable
        const { voiceChannel } = message.member;
        //checks if the user is in a voice channel
        if(!voiceChannel) return message.reply("You must be in a voice channel to use this command!");

        //checks if the channel is joinable
        if(!voiceChannel.joinable) return message.reply("That channel is not joinable!");
        //checks if the channel is full
        if(voiceChannel.full) return message.reply("That voice channel is currently full!");

        //joins the voice channel
        voiceChannel.join();

    }
}