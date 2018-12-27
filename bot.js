const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*";
var adminprefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('message', async message => {
          if (message.content.startsWith(prefix + "active")) {
              if (!message.channel.guild) return message.reply message.channel.send("** هذا الامر للسيرفرات فقط :no_entry: ** ");
            message.member.addRole(message.guild.roles.find("name". "Active"));
            message.author.send("** تم تفعيلك استمتع :slight_smile: **")
          }
        });

client.login(process.env.BOT_TOKEN);
