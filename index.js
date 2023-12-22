// get discordjs classes
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// create client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// when the client is ready, display ready/login message
client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// login using token from config file
client.login(token);
