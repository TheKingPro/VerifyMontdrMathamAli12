const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', async message => {
            if(message.content.startsWith("*active")) {
              if(!message.channel.guild) return message.reply("** هذا الامر للسيرفرات فقط :no_entry: ** ");
            message.member.addRole(message.guild.roles.find("name", "Active"));
            message.author.send("** تم تفعيلك استمتع :slight_smile: **")
          }
        });

client.login('NTI3ODkzMzg2MDIwMjU3ODEy.Dwa_sQ.7K7PhjSKONVPW8cwpIWDi7i0RM8');
