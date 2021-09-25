module.exports = {
    name: "presenceUpdate",
    async execute(oldPresence, newPresence, client) {
        console.log("User Presence Cahnged!");
        let serverID = "511289361178820618";
        let channelID = "774146090731307018";

        if(newPresence.activities.type === "STREAMING") {
            let streamer = newPresence.member;
            let link = newPresence.activities.url;

            let guild = client.guilds.cache.get(serverID);
            let channel = guild.channels.cache.get(channelID);

            channel.send(`${streamer} has gone live at: ${link}`);
        }

        if(newPresence.activities.type === "PLAYING") {
            let userPlaying = newPresence.member;
            let content = newPresence.activities.name;

            let guild = client.guilds.cache.get(serverID);
            let channel = guild.channels.cache.get(channelID);

            channel.send(`Testing: ${userPlaying.tag} is now playing ${content}`);
        }
    }
}