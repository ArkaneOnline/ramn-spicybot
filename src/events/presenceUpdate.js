module.exports = {
    name: "presenceUpdate",
    async execute(oldPresence, newPresence, client) {
        let channel = client.channels.cache.get("891238696223899668");

        console.log("User Presence Cahnged!");
        if (!newPresence.activities) return false;
        newPresence.activities.forEach(activity => {
            if (activity.type == "STREAMING") {
                channel.send(`${newPresence.user.tag} is now live at: **${activity.url}**`);
            };
        });
    }
}