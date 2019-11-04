module.exports = {
    config: {
        name: "connect",
        aliases: [],
        description: "Connects the bot to the current voice channel",
        usage: "",
        category: "audio"
    },
    run: async (client, message, args) => {
        //checks if the user is in a voice channel
        if(!message.member.voiceChannel) return message.reply("You must be in a voice channel to use this command!");
        //stores the voice channel name in a variable
        let vcName = message.member.voiceChannel.name;
        //stores the voice channel in a variable
        let vc = message.guild.channels.find(x => x.name === `${vcName}`);

        console.log(vcName);
        console.log(vc);


        //checks if the channel is joinable
        if(vc !== vc.joinable) return message.reply("That channel is unjoinable");
        //checks if the channel is full
        if(vc !== vc.full) return message.reply("That voice channel is currently full!");

        //joins the voice channel
        vc.join();

    }
}