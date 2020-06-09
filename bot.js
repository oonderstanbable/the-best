const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready' , () => {
client.user.setStatus('dnd')
});
function coinflip() {
return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
function five() {
choices = ["1","2","3","4","5","6","7","8","9","10"];
return choices[Math.floor(Math.random() * 10)];
}
function four() {
choices = ["1","2","3","4","5","6","7","8"];
return choices[Math.floor(Math.random() * 8)];
}
function three() {
choices = ["1","2","3","4","5","6"];
return choices[Math.floor(Math.random() * 6)];
}
function two() {
choices = ["1","2","3","4"];
return choices[Math.floor(Math.random() * 4)];
}

function iN(a){return/^\d+$/.test(a);}function iO(a){return a.match('^[/*+-]{1}$')==null?!1:!0;}mC={'/':function(a,b){return a/b;},'*':function(a,b){return a*b;},'-':function(a,b){return a-b;},'+':function(a,b){return a+b;}};
function cL(a){return a.replace(/[\[\]]/g, "");}
function tL(a){return a.toLowerCase();}

client.on('guildMemberAdd', member => {

let join = new Discord.RichEmbed()
.setColor(3987431)
.addField("Welcome, " + member.user.username , "to the SmokeScreen Clan Discord!")
.addField("Use **__.help__** to see SmokeScreen bot commands", "Make sure to read and follow the rules")
    console.log('User' + member.user.username + 'Has joined the server!')
    console.log(member)
    member.guild.channels.get('719725431967842377').sendEmbed(join);
});
client.on('message', message => {
    if (tL(message.content) === '.avatar') {
      message.reply(message.author.avatarURL);
    }
  });
let invite = new Discord.RichEmbed()
.setColor(15158332)
.addField("Created by **OOOPS#9915**", "DorkBot was made for Robotics Team 333A \"The 7 Dorks\"")  
client.on('message', message => {
if (tL(message.content) === '.dorks'){
message.channel.sendEmbed(invite);
    }
});
let commands = new Discord.RichEmbed()
.setColor(15844367)
.addField("Commands Available (**Prefix:** ."), "\> .help\n"
+ "\> .avatar\n"
+ "\> .flip\n"
+ "\> .yt\n"
+ "        \n"
+ "**Inhouse Commands**\n"          
+ "\> .5v5\n"
+ "\> .4v4\n"
+ "\> .3v3\n"          
+ "\> .2v2\n")
client.on('message', message => {
if (tL(message.content) === '.help') {
message.channel.sendEmbed(commands);
    }
});
client.on('message', message => {
if (tL(message.content) === '.flip') {
message.reply(coinflip());
    }
});
client.on('message', message => {
if (tL(message.content) === '.5v5') {
message.reply(five());
    }
});
client.on('message', message => {
if (tL(message.content) === '.4v4') {
message.reply(four());
    }
});
client.on('message', message => {
if (tL(message.content) === '.3v3') {
message.reply(three());
    }
});client.on('message', message => {
if (tL(message.content) === '.2v2') {
message.reply(two());
    }
});
client.on('message', message => {
if (tL(message.content) === '.yt') {
message.reply('https://www.youtube.com/channel/UCj2izAeIjae73iHloqvAKfw');
    }
});
client.on('message', message => {
if (tL(message.content) === '.twitter') {
message.reply('https://twitter.com/Real_OOOPS');
    }
});
client.login(process.env.BOT_TOKEN);
