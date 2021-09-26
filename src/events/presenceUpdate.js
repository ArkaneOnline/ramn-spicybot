module.exports = {
    name: "presenceUpdate",
    async execute(oldPresence, newPresence, client) {
        let channel = client.channels.cache.get("891238696223899668");
        let clan1role = newPresence.guild.roles.cache.get("588843272860991498");
        let clan2role = newPresence.guild.roles.cache.get("588843161690964023");

        if (!newPresence.activities) return false;
        if (!newPresence.member.roles.cache.has(clan1role || clan2role)) return;
        newPresence.activities.forEach(activity => {
            if (oldPresence.activities.type == "STREAMING") return;
            if (activity.type == "STREAMING") {
                channel.send(`${newPresence.user.tag} is now live! \nChack them out at: **<${activity.url}>**`);
            };
        });
    }
}