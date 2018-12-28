const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async message => {
            if(message.content.startsWith("*active")) {
                                  message.delete()
              if(!message.channel.guild) return message.reply("** هذا الامر للسيرفرات فقط :no_entry: ** ");
            message.member.addRole(message.guild.roles.find("name", "Active"));
            message.author.send("** تم تفعيلك استمتع :slight_smile: **")
          }
        });

client.login(process.env.BOT_TOKEN);
