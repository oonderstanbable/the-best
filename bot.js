const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready' , () => {
 
    client.user.setStatus('idle')
   // client.user.setActivity('type era help for help')
 
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
 
client.on("message",a=>{mV=a.content.split(" "),mV.length>=7&&"era"==tL(a.content.slice(0,17))&&iN(mV[4])&&iO(mV[5])&&iN(mV[6])&&a.channel.send(Math.round(1e4*mC[mV[5]](parseInt(mV[4]),parseInt(mV[6])))/1e4)});
 
        let embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Hey, I'm era bot", "**Discord link:** https://discord.gg/x3d8Ajh")
        .addField("Commands Available:", "```-era\n"
        + "-era flip a coin\n"
        + "-era ball\n"
        + "-era clan\n"
        + "-era gay\n"
        + "-era twitter```")
        .addField("**OAuth2 Link:**", "https://discordapp.com/api/oauth2/authorize?client_id=589092675228270600&permissions=8&scope=bot")
client.on('message', message => {
    if (tL(message.content) === 'era help') {
        message.author.sendEmbed(embed);
    }
});
 
        let clan = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("**Clan Level**", "69")
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
        + "b3nnyb0i\n")
client.on('message', message => {
    if (tL(message.content) === 'era clan') {
        message.channel.sendEmbed(clan);
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
