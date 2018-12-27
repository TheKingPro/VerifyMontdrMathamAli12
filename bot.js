const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', async message => {
          if(message.content.startsWith(prefix + "active")) {
              if(!message.channel.guild) return message.reply message.channel.send("** هذا الامر للسيرفرات فقط ⛔ ** ");
            message.member.addRole(message.guild.roles.find("name". "Active"));
            message.author.send("** تم تفعيلك استمتع 🙂 **")
          }
        });
client.login(process.env.BOT_TOKEN);
