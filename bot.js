const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

client.on('message', msg => {
  if (msg.content === 'رابط') {
    msg.reply('**تم ارسال الرابط في الخاص**');
  }
});

    
client.on('message', message => {
     if (message.content === "رابط") {
message.author.send("***WELCOME TO ZOMBIE***" + `  **

https://discord.gg/2UJV6Hp

**`);
    }
});      




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Z_4Ever`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
