module.exports = {
    config: {
        name: "uptime",
        aliases: [],
        description: "View how long I have been online",
        usage: "",
        category: "general"
    },
    run: async (client, message, args) => {
        //stores all the variables that we need
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
    
        //creates a variable with all the variable above
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        
        //sends the variable as a message
        message.channel.send(uptime);
        
        //stops the code
        return;
    }
}