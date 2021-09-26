module.exports = {
    name: "presenceUpdate",
    async execute(oldPresence, newPresence, client) {
        let channel = client.channels.cache.get("891238696223899668");

        if (!newPresence.activities) return false;
        newPresence.activities.forEach(activity => {
            if (oldPresence.activities.type == "STREAMING") return;
            if (activity.type == "STREAMING") {
                channel.send(`${newPresence.user.tag} is now live at: ${activity.url}`);
            };
        });
    }
}