const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready' , () => {
client.user.setStatus('dnd')
});
function coinflip() {
return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}/*
function ball() {
choices = ["||penis||","era is the best clan","#era gang","get out of my face","you are beautiful just the way you are","you are loved by OOOPS","you will be banned from this server one day","you are gay"];
return choices[Math.floor(Math.random() * 8)];
}

*/
function iN(a){return/^\d+$/.test(a);}function iO(a){return a.match('^[/*+-]{1}$')==null?!1:!0;}mC={'/':function(a,b){return a/b;},'*':function(a,b){return a*b;},'-':function(a,b){return a-b;},'+':function(a,b){return a+b;}};
function cL(a){return a.replace(/[\[\]]/g, "");}
function tL(a){return a.toLowerCase();}

/*
client.on('guildMemberAdd', member => {

let join = new Discord.RichEmbed()
.setColor(15158332)
.addField('**' + member.user.username + '**, has joined era Clan discord', 'Make sure to Follow https://krunker.io/social.html?p=profile&q=OOOPS') 
.addField("Use **__era help__** to see era Bot commands", "If you want to apply you can go to #【📋】how-to-apply to learn join")
    console.log('User' + member.user.username + 'Has joined the server!')
    console.log(member)
    
    message.guildMember.sendEmbed(rules);
    member.guild.channels.get('586309740217237525').sendEmbed(join);
});
client.on('message', message => {
let args = message.content.split(' ');*/


client.on('message', message => {
    if (tL(message.content) === '.avatar') {
      message.reply(message.author.avatarURL);
    }
  });

let invite = new Discord.RichEmbed()
.setColor(15158332)
.addField("Created by **OOOPS#9915**", "RCS Bot was Made for the Robofight Competitve Discord server")  
client.on('message', message => {
if (tL(message.content) === '.rcs') {
message.channel.sendEmbed(invite);
    }
});
let commands = new Discord.RichEmbed()
.setColor(15844367)
.addField("Commands Available:", "-.avatar\n"
+ "-.help\n"
+ "-.flip\n"
+ "-.rcs\n"
+ "-.invite")
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

/*client.on('message', message => {
if (tL(message.content) === 'era ball') {
message.reply(ball());
    }
});*/

client.on('message', message => {
if (tL(message.content) === '.twitter') {
message.reply('https://twitter.com/CRobofight');
    }
});

client.login(process.env.BOT_TOKEN);
