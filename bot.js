const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*";
var adminprefix = '*'

client.on('message', async message => {
          if (message.content.startsWith(prefix + "active")) {
            message.member.addRole(message.guild.roles.find("name". "Active"));
            message.author.send("** تم تفعيلك استمتع :slight_smile: **")
          }
        });

client.login(process.env.BOT_TOKEN);
