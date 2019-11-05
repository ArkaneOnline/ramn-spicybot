const config = require("../../config.json");
const { inspect } = require("util");

module.exports = {
    config: {
        name: "eval",
        aliases: [],
        description: "Evaluates code and performs it directly from discord",
        usage: "<code>",
        category: "misc"
    },
    run: async (client, message, args) => {
        if(message.author.id !== config.importantIDs.staffIDs.arkane) return message.reply("This command is locked to the bot owner only!");
        let toEval = args.join(" ");
        let evaluated = inspect(eval(toEval, { depth: 0 }))

        try {
            if(toEval){
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart)
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
            } else {
                message.reply("Evaluation error: empty args");
            }
        } catch (e) {
            message.reply(`Evaluation error: \`${e.message}\``)
        }
        return;
    }
}