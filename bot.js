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

client.on('message', message => {
     if (message.content === "رابط") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")


const Discord = require ("discord.js");
const client = new Discord.Client();
    
client.on('message', message => {
     if (message.content === "رابط") {
message.author.send("***رابط كلان زد***" + `  **

https://discord.gg/2UJV6Hp

**`);
    }
});      





client.login("NDU1NTYwMjI1MjQ4OTAzMTY4.DgGeEA.2-OYyC-CB9j9NksGR_uf4OqIXP0")
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
