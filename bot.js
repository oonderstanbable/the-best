const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready' , () => {
    client.user.setStatus('dnd');
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
    member.guild.channels.get('720453687104766032').sendEmbed(join);
});

let scrims = new Discord.RichEmbed()
.setColor(15158332)
.addField("‎\n", "**=============**\n" 
+ "**__Smoke E-Sports Scrim Schduele__**\n"
+ "‎\n"
+ "**Monday:**\n"
+ "‎\n"
+ "**Tueday:**\n"
+ "‎\n"
+ "**Wednesday:**\n"
+ "‎\n"
+ "**Thursday:**\n"
+ "‎\n"
+ "**Friday:**\n"
+ "‎\n"
+ "**=============**\n")  
client.on('message', message => {
if (tL(message.content) === '.ss'){
message.channel.sendEmbed(scrims);
    }
});
if (tL(message.content) === 'tour guide'){
message.channel.send('@Pain#9599');
    }
});
let commands = new Discord.RichEmbed()
.setColor(15844367)
.addField("**Prefix:** ." , "**Commands**\n"
+ "\> .help\n"
+ "\> .avatar\n"
+ "\> .flip\n"
+ "\> .server\n"
+ "\> .ui\n"
+ "**Inhouse Commands**\n"          
+ "\> .5v5\n"
+ "\> .4v4\n"
+ "\> .3v3\n"          
+ "\> .2v2\n"
+ "**Clan Commands**\n"
+ "\> .ss\n" )
client.on('message', message => {
if (tL(message.content) === '.help') {
message.channel.sendEmbed(commands);
    }
});
client.on('message', message => {
     
 if (tL(message.content) === '.ui') {
	 message.channel.send(`**Your username:** ${message.author.username}\n**Your ID:** ${message.author.id}\n **Your Avatar:** ${message.author.avatarURL}`);
 }
if (tL(message.content) === '.flip') {
message.reply(coinflip());
    }

if (tL(message.content) === '.5v5') {
message.channel.send(five());
    }


if (tL(message.content) === '.4v4') {
message.channel.send(four());
    }
if(tL(message.content)=== '@SmokeScreen Bot#6935') {
	message.channel.send('boi What the fuck do you want?')
}
if (tL(message.content) === '.server') {
	message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
}
    
if (tL(message.content) === '.3v3') {
message.channel.send(three());
    }
 
});
client.login(process.env.BOT_TOKEN);
