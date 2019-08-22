const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready' , () => {
client.user.setStatus('Online')
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

   /* let rules = new Discord.RichEmbed()
    .setcolor(15158332)
    .addField("```ini"
       +"Welcome to Era clan discord\n"
       +"▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n"
       + "```md\n"
       + " # Server Rules\n"
       + " - No harassment, discrimination or abuse of any kind (be respectful).\n"
       + "  • No excessive cursing, or sexual content. There is zero tolerance for racism on this server.\n"
       + " - No NSFW, drug, pornography, or sexually explicit.\n"
       + "  • Not even in an artistic sense.\n"
       + "  - No spam\n"
       + "  • This includes server invites, mass mentions, caps, screamers, and link spam.\n"
       + " - No trolling, and heavy politics.\n"
       + "  • This includes flame wars, and political or religious debate.\n"
       + " - No advertising\n"
       + "  • This includes 'follow me @ Example', server invites, affiliate links, or DM advertising.\n"
       + " - No sharing of private information.\n"
       + "  • Posting the personal information of peoples other than yourself is prohibited, and for privacy's sake, we don't recommend sharing your own.\n"
       + " - No abusing custom emotes or reactions.\n"
       + "  •This includes spamming reactions, and inappropriate emotes.\n"
       + " - Abide by all of Discord’s TOS : https://discordapp.com/terms\n"
       + " - Lastly, respect all staff and members!(kick)\n"
       + "  •Do not copy someone's application and paste it as a 'joke'(kick)\n"
       + "  \n"
       + " # Krunker Rules\n"
       + " - No hacking (instant ban)\n"
       + " - No hackusations (dm me if you have any and I will investigate them)\n"
       + " - If you want to apply for the clan you must Dm me (@OOOPS#9915)\n"
       + " ```\n"
       + " ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n"
       + " **OFFICIAL INVITE LINK:** https://discord.gg/x3d8Ajh\n"
       +"```\n");
    message.guildMember.sendEmbed(rules);
    member.guild.channels.get('586309740217237525').sendEmbed(join);
});*/
/*client.on('message', message => {
let args = message.content.split(' ');
    if(args[0].toLowerCase() === 'era' && args[1].toLowerCase() === 'krunker') {
        if(!args[2]) return message.channel.send('Specify a player retard');
        message.channel.send('https://krunker.io/social.html?p=profile&q=' + args.slice(2).join('%20'));
    }
});*/


client.on('message', message => {
    if (tL(message.content) === '.avatar') {
      message.reply(message.author.avatarURL);
    }
  });

//client.on("message",a=>{mV=a.content.split(" "),mV.length>=7&&"era"==tL(a.content.slice(0,17))&&iN(mV[4])&&iO(mV[5])&&iN(mV[6])&&a.channel.send(Math.round(1e4*mC[mV[5]](parseInt(mV[4]),parseInt(mV[6])))/1e4)});

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
message.reply('https://twitter.com/OOnderstandable');
    }
});

client.login(process.env.BOT_TOKEN);
