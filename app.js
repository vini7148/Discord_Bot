// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

const {
    token
} = require("./token.json");

// Display a message once the bot has started
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Display a message when reconnecting the bot
client.on("reconnecting", () => {
    console.log(`Reconnecting the bot: ${client.user.tag}!`);
});

// Display a message when the bot is disconnected
client.on("disconnected", () => {
    console.log(`disconnect the bot: ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", msg => {
    // Send back a reply when the specific command has been written
    if (msg.content === "!hello") {
        msg.reply("Hello world!");
    }

    else if (msg.content === "!help") {
        msg.reply("This bot has two commands !hello, !help");
    };
});

// Log in the bot with the token
client.login(token);