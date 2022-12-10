const { Client, GatewayIntentBits } = require('discord.js')
const tips = require("./commandes/tips");
const oui = require("./commandes/oui");

const client = new Client({ intents: [] });
const token = 'MTA1MTEzOTE4MjQzODkxMjAzMg.GksPcR.WJRuqip_CSyiVaCz6FEYhCqe3ESDwmMKAs-iTo'

client.on('ready', () => {
    console.log(client);
});

client.on("messageCreate", message => {
    console.log(`The user has said: ${message} `);
})




// module.exports = (client, message) => {
//     if (message.content.startsWith("!tips")) {
//         return kick()
//     }
// }

client.login(token);