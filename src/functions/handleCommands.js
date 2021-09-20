const {
    REST
} = require("@discordjs/rest");
const {
    Routes
} = require("discord-api-types/v9");
const fs = require("fs");
const clientID = "879986228659892255";
const guildID = "823425620519944232";

module.exports = (client) => {
    client.handleCommands = async (commandFolders, path) => {
        client.commandArray = [];
        for (folder of commandFolders){
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith(".js"));
            for (const file of commandFiles) {
                const command = require(`../commands/${folder}/${file}`);

                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
            }
        }
        const rest = new REST({
            version: "9"
        }).setToken(process.env.TOKEN);

        (async () => {
            try {
                console.log("Started refreshing application (/) commands.");

                await rest.put(
                    Routes.applicationGuildCommands(clientID, guildID), {
                        body: client.commandArray
                    },
                );

                console.log("Successfully reloaded application (/) commands.");
            } catch (error) {
                console.error(error);
            }
        })();
    };
};