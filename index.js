import { token } from "./key/key.js";
import Discord, { Channel } from "discord.js";
import { prefix} from "./key/key.js";

const client = new Discord.Client();
console.log("Starting...");
console.log("Link: https://discordapp.com/oauth2/authorize?client_id=980034017418182656&scope=bot&permissions=8");

client.on("ready", () => {
  console.log("I am ready!, on " + client.user.tag);
});

client.on("message", (message) => {
  message.content.toLowerCase();
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  switch (command) {
    case "ping":
      message.channel.send("Pong!");
      break;
    case "help":
      message.channel.send("Prefix:```#<Command>``` \nCommands: \n- **ping** \n- **help** \n- **nuke**");
      break;
    case "nuke":
      message.channel.bulkDelete(100);
      message.channel.send("Nuked!");
      break;
    case "card":
      break;
  }
});

client.login(token);
