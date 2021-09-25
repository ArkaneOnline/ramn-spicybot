module.exports = {
    name: "presenceUpdate",
    async execute(oldPresence, newPresence, client) {

        let server = client.guilds.cache.get("511289361178820618");
        let channel = client.channels.cache.get("774146090731307018");

        console.log("User Presence Cahnged!");
        if (!newPresence.activities) return false;
        newPresence.activities.forEach(activity => {
            if (activity.type == "PLAYING") {
                console.log(`Testing: ${newPresence.user.tag} is now playing ${newPresence.activities.details}`)
                //channel.send(`Testing: ${newPresence.user.tag} is now playing ${newPresence.activities.name}`);
            };
        });
    }
}