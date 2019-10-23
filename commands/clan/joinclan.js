const Traveler = require("the-traveler").default;
const groupv2 = require("the-traveler/build/type-definitions/groupv2/index")

const traveler = new Traveler({ apikey: "b91083e79056494d91ca582eaaad9938", userAgent: "app-platform" })

module.exports = {
    config: {
        name: "joinclan",
        aliases: [],
        description: "Sends a message with links to join one of our many great clans!",
        usage: "",
        category: "clan"
    },
    run: async (client, message, args) => {
        await message.delete();
        let clan3count = groupv2.GroupsForMemberFilter.All();

        consolg.log(clan3count);

        //oh god i can't wait to format this
        message.channel.send("We have a few select clans that you can join! \nBelow are a list of clans that we run, so pick you clan and bug your clan staff in <#616735734874898462>! \n\nClan 1: \nhttps://www.bungie.net/en/ClanV2?groupid=2089890\n\nClan 2: \nhttps://www.bungie.net/en/ClanV2?groupid=3778179\n\nClan 3: \nhttps://www.bungie.net/en/ClanV2?groupid=3868416\n\nWe hope you enjoy your stay in our clan! \nYou can DM a Staff Member or ask in <#511289361178820621> if you have any further questions!");
        return;
    }
}