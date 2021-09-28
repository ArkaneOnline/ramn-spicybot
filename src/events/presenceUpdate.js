module.exports = {
    name: "presenceUpdate",
    async execute(oldPresence, newPresence, client) {
        let channel = client.channels.cache.get("891238696223899668");
        let clanrole = newPresence.guild.roles.cache.get("892213185749319760");

        if (!newPresence.activities) return false;
        if (newPresence.member.roles.cache.has(clanrole)) {
            newPresence.activities.forEach(activity => {
                if (oldPresence.activities.type == "STREAMING") return false;
                if (activity.type == "STREAMING") {
                    channel.send(`${newPresence.user.tag} is now live! \nChack them out at: **<${activity.url}>**`);
                    message.delete();
                };
            });
        }
    }
}