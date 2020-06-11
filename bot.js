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
    member.guild.channels.get('719725431967842377').sendEmbed(join);
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

let commands = new Discord.RichEmbed()
.setColor(15844367)
.addField("**Prefix:** ." , "**Commands**\n"
+ "\> .help\n"
+ "\> .avatar\n"
+ "\> .flip\n"
+ "\> .server\n"
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
    if (tL(message.content) === '.avatar') {
      message.reply(message.author.avatarURL);
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
    
if (tL(message.content) === '.server') {
	message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
}
    
if (tL(message.content) === '.3v3') {
message.channel.send(three());
    }
  if(tL(message.content) === ".p") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
if (tL(message.content) === '.2v2') {
message.channel.send(two());
    }
});
client.login(process.env.BOT_TOKEN);
