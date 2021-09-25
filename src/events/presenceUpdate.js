module.exports = {
    name: "presenceUpdate",
    async execute(oldPresence, newPresence, client) {
        console.log("User Presence Cahnged!");
        if (!newPresence.activities) return false;
        newPresence.activities.forEach(activity => {
            if (activity.type == "PLAYING") {
                console.log(`${newPresence.user.tag} is playing a game.`);
            };
        });
    }
}