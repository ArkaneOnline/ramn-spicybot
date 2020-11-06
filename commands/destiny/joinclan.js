module.exports = {
    config: {
        name: "joinclan",
        aliases: "",
        description: "Sends a link to the different clans we run.",
        usage: "(none)",
        category: "destiny"
    },
    run: async (client, message, args) => {
        message.reply("Click this link for more information: https://discordapp.com/channels/511289361178820618/616734950984515604/616735896850661417");
        
        return;
    }
}