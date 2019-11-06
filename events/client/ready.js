//requires the packages we need for this file
const { prefix } = require("../../config.json");

module.exports = async (client, message) => {
    //defines an array named "presences" that we can call to later
    let presences = [
        "Running through Titan baricades since 1989",
        "It's real ape hours",
        `${client.users.size} Ramen Shop members`,
        "Bubble Titans are scary Titans",
        "Join the Ramen Shop!",
        "011011100111010101110100",
        "Read the rules!",
        "Hunter main, big brain",
        "Invite your friends!",
        "Titan main, tiny brain",
        "Can we get an async for each function?",
        "Arkane barely plays destiny recently",
        "Warlocks are no longer viable small brain",
        "twitch.tv/arkanelive",
        `${prefix}clanraids`,
        `${prefix}d2updates`,
        `${prefix}hiatus`,
        `${prefix}joinclan`,
        `${prefix}lfg`,
        `${prefix}avatar`,
        `${prefix}changelog`,
        `${prefix}patreon`,
        `${prefix}ping`,
        `${prefix}serverinfo`,
        `${prefix}uptime`,
        `${prefix}userinfo`,
        `${prefix}apply`,
        `${prefix}staff`,
        `${prefix}steam`,
        `${prefix}suggest`,
        `${prefix}xur`
    ]

    //creates a loop that will fire every 60 seconds
    setInterval(() => {
        const presence = Math.floor(Math.random() * (presences.length - 1) + 1);
        client.user.setPresence({ game: { name: `${prefix}help | ${presences[presence]}`}, status: "dnd" });
    }, 60000)
    console.log(`${client.user.username} is online! \nThe Ramen Shop has ${client.users.size} users!`);
}