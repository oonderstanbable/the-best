const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();
//const KrunkerJS = require('krunker.io');
//const Krunker = new KrunkerJS();
client.on('ready' , () => {
client.user.setStatus('Online')
//client.user.setActivity('type era help for help')
});
function coinflip() {
return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
function ball() {
choices = ["||penis||","era is the best clan","#era gang","get out of my face","you are beautiful just the way you are","you are loved by OOOPS","you will be banned from this server one day","you are gay"];
return choices[Math.floor(Math.random() * 8)];
}
function iN(a){return/^\d+$/.test(a);}function iO(a){return a.match('^[/*+-]{1}$')==null?!1:!0;}mC={'/':function(a,b){return a/b;},'*':function(a,b){return a*b;},'-':function(a,b){return a-b;},'+':function(a,b){return a+b;}};
function cL(a){return a.replace(/[\[\]]/g, "");}
function tL(a){return a.toLowerCase();}

client.on('message', message => {
if (tL(message.content) === 'era') {
message.channel.send('Hello, era bot is at your service.');
    }
});

client.on('message', message => {
    if (message.content === 'rip') {
        message.channel.send({files: [".rip.png"]});
    }
});


client.on('message', message => {
    if (tL(message.content) === 'era krunker') {
    message.channel.send('https://krunker.io/social.html?p=profile&q=');
        }
    });
    
/*// Get the stats of the user
Krunker.getUser('Helinho').then(data => {
    // Console log the user stats as an object
    console.log(data);
    // [V1.2^ Feature] Gets all stats ready as an object
    console.log(data.simplified);
 
    // Convert Player Score to Level
    Krunker.getLevel(data);
    // Convert Time Played
    Krunker.getPlayTime(data);
    // Get user KDR
    Krunker.getKDR(data);
    // Get W/L
    Krunker.getWL(data);
    // Get SPK
    Krunker.getSPK(data);
});*/

client.on('message', message => {
    if (tL(message.content) === 'era avatar') {
      message.reply(message.author.avatarURL);
    }
  });

client.on("message",a=>{mV=a.content.split(" "),mV.length>=7&&"era"==tL(a.content.slice(0,17))&&iN(mV[4])&&iO(mV[5])&&iN(mV[6])&&a.channel.send(Math.round(1e4*mC[mV[5]](parseInt(mV[4]),parseInt(mV[6])))/1e4)});
let embed = new Discord.RichEmbed()
.setColor(0x4286f4)
.addField("Hey, I'm era bot", "**Discord link:** https://discord.gg/x3d8Ajh")
.addField("Commands Available:", "```-era\n"
+ "-era flip a coin\n"
+ "-era ball\n"
+ "-era clan\n"
+ "-era gay\n"
+ "-era sv\n"
+ "-era mia\n"
+ "-era fra\n"
+ "-era avatar\n"
+ "-era twitter```")
.addField("**OAuth2 Link:**", "https://discordapp.com/api/oauth2/authorize?client_id=589092675228270600&permissions=8&scope=bot")
client.on('message', message => {
if (tL(message.content) === 'era help') {
message.author.sendEmbed(embed);
    }
});

let clan = new Discord.RichEmbed()
.setColor(0x4286f4)
.addField("**Clan Level**", "77")
.addField("**Clan Members:**", "OOOPS (leader)\n"
+ "awesompuppy\n"
+ "boB_\n"
+ "rylentless\n"
+ "C4ndymon\n"
+ "Spyrosh\n"
+ "NBG Rain\n"
+ "Constrained\n"
+ "ItsCostco\n"
+ "Dalzik\n"
+ "evbg\n"
+ "Hunnids\n"
+ "Wheet\n"
+ "KenjiFTW\n"
+ "ripmain\n"
+ "eonsapart\n"
+ "b3nnyb0i\n"
+ "szv\n"
+ "px\n"
+ "Infeno\n"
+ "!*^")
client.on('message', message => {
if (tL(message.content) === 'era clan') {
message.channel.sendEmbed(clan);
    }
});

let mia = new Discord.RichEmbed()
.setColor(0x4286f4)
.addField("**__Miami Comp Team #1__**", "```ini\n"
+"- rylentless [Leader]\n"
+"- evbg\n"
+"- hunnids\n"
+"- Constrained\n"
+"; NBG Rain(sub)\n"
+"```\n")
.addField("**__Miami Competitive Roster #2__**","```ini\n"
+"- NBG Rain [Leader]\n" 
+"- !*^\n"
+"- Infeno\n"
+"- px\n"
+"; (sub)\n"
+"```")
.addField("**__Miami Competitive Record__**", "```diff\n"
+ "+\n"
+ "-\n"
+ "```\n")
client.on('message', message => {
if (tL(message.content) === 'era mia') {
message.channel.sendEmbed(mia);
    }
});

let sv = new Discord.RichEmbed()
.setColor(0x4286f4)
.addField("**__Silicon Valley Comp Team__**", "```ini\n"
+"- Sonder [Leader]\n"
+"- boB_\n"
+"- spyrosh\n"
+"- Malihboo\n"
+"; eonsapart(sub)\n"
+"; C4ndymon(sub)\n"
+"```\n")
.addField("**__Silicon Valley Competitive Record__**", "```diff\n"
+ "+ era-20,000 / JUG$-7,365\n"
+ "+ era-28,040 / The Pick-ups-27,515\n"
+ "+ era-14,800 / LUHH-10,000\n"
+ "+ era-15,000 / 悪魔-10,665\n"
+ "+ era-20,000 / Dyna-8,600\n"
+ "+ era-42,375  / verb-27,715\n"
+ "+ era-10,000 / FRCE - 9360\n"
+ "```\n")
client.on('message', message => {
if (tL(message.content) === 'era sv') {
message.channel.sendEmbed(sv);
    }
});

let fra = new Discord.RichEmbed()
.setColor(0x4286f4)
.addField("**__Frankfurt Comp Team__**", "```ini\n"
+"-  [Leader]\n"
+"- \n"
+"- \n"
+"- \n"
+"; (sub)\n"
+"```\n")
.addField("**__Frankfurt Competitive Record__**", "```diff\n"
+ "+\n"
+ "-\n"
+ "```\n")
client.on('message', message => {
if (tL(message.content) === 'era fra') {
message.channel.sendEmbed(fra);
    }
});

client.on('message', message => {
if (tL(message.content) === 'era flip a coin') {
message.reply(coinflip());
    }
});

client.on('message', message => {
if (tL(message.content) === 'era ball') {
message.reply(ball());
    }
});

client.on('message', message => {
if (tL(message.content) === 'era gay') {
message.reply('Sonder is the gayest person in the world');
    }
});

client.on('message', message => {
if (tL(message.content) === 'era twitter') {
message.reply('https://twitter.com/OOnderstandable');
    }
});

client.login(process.env.BOT_TOKEN);
