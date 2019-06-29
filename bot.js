const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready' , () => {
client.user.setStatus('Online')
});
function coinflip() {
return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
function ball() {
choices = ["||penis||","era is the best clan","#era gang","get out of my face","you are beautiful just the way you are","you are loved by OOOPS","you will be banned from this server one day","you are gay"];
return choices[Math.floor(Math.random() * 8)];
}
function scope() {
choices = ["https://cdn.discordapp.com/attachments/582668113854595097/593806948978262047/Pngtreepaint_color_circles_212860_2.png","https://media.discordapp.net/attachments/582082294655746059/592353080943575054/krunker-crosshair.png?width=474&height=474","https://media.discordapp.net/attachments/592029007172599810/592981394154586133/clean_gradient_scope.png?width=474&height=474","https://media.discordapp.net/attachments/560218391105896457/565223755232837632/cato.png?width=487&height=487","https://images-ext-2.discordapp.net/external/XPTrPiO8R2ziHwP_voLtu7HEg7KRb83ZgeYR6VAvqw0/https/cdn.discordapp.com/attachments/586270578894438413/586271135033983006/yel.png?width=270&height=270","https://cdn.discordapp.com/attachments/583767339649204225/587317148171370506/recticle.png","https://cdn.discordapp.com/attachments/575245800633008128/575280480610418698/Crosshair_test.png","https://cdn.discordapp.com/attachments/452898636205129730/585662907929329674/dotbluesniper1.png","https://media.discordapp.net/attachments/582082294655746059/582084765272899648/quackscope2.png?width=474&height=474","https://media.discordapp.net/attachments/582082294655746059/582084758306029588/quackscope6.png?width=474&height=474","https://media.discordapp.net/attachments/582082294655746059/582084764601942016/image0.png?width=474&height=474","https://media.discordapp.net/attachments/582082294655746059/586748014631059456/scope.png?width=474&height=474","https://media.discordapp.net/attachments/582082294655746059/582204698568818723/scope-hd-png-download-1080.png?width=474&height=474","https://media.discordapp.net/attachments/582082294655746059/582084764601942016/image0.png?width=474&height=474","https://cdn.discordapp.com/attachments/573231059274170421/573233011676414033/Untitled-1.png","https://cdn.discordapp.com/attachments/582667537989238815/593770376597602304/scope_PNG13037.png","https://cdn.discordapp.com/attachments/582667537989238815/593770478380908557/61f6x303xGL.png","https://cdn.discordapp.com/attachments/582667537989238815/593770731754487818/9hpat5kb1ox21.png","https://cdn.discordapp.com/attachments/582667537989238815/593771034587693066/krunker_custom_scope_v2_by_theanimeflamettv_dd8lwwq-pre.png","https://cdn.discordapp.com/attachments/582667537989238815/593771477543944202/aiming-reticle-png-simple-crosshairs-transparent-background-6.png","https://cdn.discordapp.com/attachments/494607285079900171/577247727453208596/simbolos-egipcios-Ouroboros-600x600.png","https://cdn.discordapp.com/attachments/555896665232637964/565245220795449374/dribble.gif","https://cdn.discordapp.com/attachments/578013147018035202/578013339528200212/purplei_crosshaire.png","https://media.discordapp.net/attachments/572591986016649246/576204975030534199/quix_copy.png?width=517&height=517","https://cdn.discordapp.com/attachments/564095254320513060/581692480102203393/unknown.png Infeno made that scope","https://cdn.discordapp.com/attachments/580542965949136906/581809647749562378/Crosshairedit1.gif","https://cdn.discordapp.com/attachments/582082294655746059/582203589687115786/png-sight-transparent-sightpng-images-pluspng-sight-png-640_640.png","https://cdn.discordapp.com/attachments/579466289681006603/585927187253821442/Untitled_6.png","https://media.discordapp.net/attachments/484192044261179403/551812087312023579/reticle_lol.png","https://cdn.discordapp.com/attachments/567266978830745600/571635918642085899/meme.png","https://cdn.discordapp.com/attachments/567266978830745600/568466583739957299/Monster.png","https://cdn.discordapp.com/attachments/534666432173047818/568148686975270913/thanos.png","https://cdn.discordapp.com/attachments/534666432173047818/568148682718052392/redbullscope.png","https://cdn.discordapp.com/attachments/534666432173047818/568148681405235200/Rainbow.png","https://cdn.discordapp.com/attachments/534666432173047818/568148686350319617/Snake.png","https://cdn.discordapp.com/attachments/524281919022694422/554154385408524308/retical.png","https://cdn.discordapp.com/attachments/341425294046920709/578067700174290954/crosshair2.png","https://cdn.discordapp.com/attachments/567266978830745600/567631621172494337/Scopes-PNG-Picc.png","https://www.onlygfx.com/wp-content/uploads/2017/11/grunge-circle-frame-2-983x1024.png"];
return choices[Math.floor(Math.random() * 37)];
}
function iN(a){return/^\d+$/.test(a);}function iO(a){return a.match('^[/*+-]{1}$')==null?!1:!0;}mC={'/':function(a,b){return a/b;},'*':function(a,b){return a*b;},'-':function(a,b){return a-b;},'+':function(a,b){return a+b;}};
function cL(a){return a.replace(/[\[\]]/g, "");}
function tL(a){return a.toLowerCase();}


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
    message.guildMember.sendEmbed(rules);*/
    member.guild.channels.get('586309740217237525').sendEmbed(join);
});
/*client.on('message', message => {
let args = message.content.split(' ');

    if(args[0].toLowerCase() === 'era' && args[1].toLowerCase() === 'krunker') {
        if(!args[2]) return message.channel.send('Specify a player retard');
        message.channel.send('https://krunker.io/social.html?p=profile&q=' + args.slice(2).join('%20'));
    }
});*/


client.on('message', message => {
    if (tL(message.content) === 'era avatar') {
      message.reply(message.author.avatarURL);
    }
  });

client.on("message",a=>{mV=a.content.split(" "),mV.length>=7&&"era"==tL(a.content.slice(0,17))&&iN(mV[4])&&iO(mV[5])&&iN(mV[6])&&a.channel.send(Math.round(1e4*mC[mV[5]](parseInt(mV[4]),parseInt(mV[6])))/1e4)});

let invite = new Discord.RichEmbed()
.setColor(15158332)
.addField("Created by **OOOPS#9915**", "era Bot is a bot that is made for the era Krunker Clan")  
.addField("**Clan Discord link:**", "https://discord.gg/x3d8Ajh")
.addField("**OAuth2 Link:**", "https://discordapp.com/api/oauth2/authorize?client_id=589092675228270600&permissions=8&scope=bot")
client.on('message', message => {
if (tL(message.content) === 'era invite') {
message.channel.sendEmbed(invite);
    }
});
let commands = new Discord.RichEmbed()
.setColor(15844367)
.addField("Commands Available:", "-era avatar\n"
+ "-era help\n"
+ "-era coin flip\n"
+ "-era ball\n"
+ "-era clan\n"
+ "-era gay\n"
+ "-era sv\n"
+ "-era mia\n"
+ "-era fra\n"
+ "-era invite\n"
+ "-era scope\n"
+ "-era twitter")
client.on('message', message => {
if (tL(message.content) === 'era help') {
message.channel.sendEmbed(commands);
    }
});
let clan = new Discord.RichEmbed()
.setColor(15844367)
.addField("**Clan Level**", "100")
.addField("**Clan Members:**", "OOOPS (leader)\n"
+ "Vortex Gfx\n"
+ "boB_\n"
+ "awesompuppy\n"
+ "rylentless\n"
+ "MadaMada\n"
+ "jumpshawt\n"
+ "NBG Rain\n"
+ "px\n"
+ "Constrained\n"
+ "iguessmysmurf\n"
+ "Infeno\n"
+ "ItsCostco\n"
+ "Dalzik\n"
+ "Remmii\n"
+ "evbg\n"
+ "szv\n"
+ "Hunnids\n"
+ "Wheet\n"
+ "KenjiFTW\n"
+ "Iaw\n"
+ "Kyrof\n"
+ "eonsapart\n"
+ "Halloluke0201\n"
+ "Spyrosh\n"
+ "Zandrrr\n"
+ "VoidWave\n")
client.on('message', message => {
if (tL(message.content) === 'era clan') {
message.channel.sendEmbed(clan);
    }
});

let mia = new Discord.RichEmbed()
.setColor(1752220)
.addField("**__Miami Comp Team #1__**", "```ini\n"
+"- Constrained [Leader]\n"
+"- Hunnids\n"
+"- Infeno\n"
+"- Remmii\n"
+"; (sub)\n"
+"```\n")
.addField("**__Miami Competitive Roster #2__**","```ini\n"
+"- px [Leader]\n" 
+"- NBG Rain\n"
+"- Rylentless\n"
+"- evbg\n"
+"; (sub)\n"
+"```")
.addField("**__Miami Competitive Record__**", "```diff\n"
+ "+ era-25,000 / dyna-24,115\n"
+ "+\n"
+ "-\n"
+ "```\n")
client.on('message', message => {
if (tL(message.content) === 'era mia') {
message.channel.sendEmbed(mia);
    }
});

let sv = new Discord.RichEmbed()
.setColor(1752220)
.addField("**__Silicon Valley Comp Team__**", "```ini\n"
+"- boB_ [Leader]\n"
+"- awesompuppy\n"
+"- spyrosh\n"
+"- jumpshawt\n"
+"; (sub)\n"
+"```\n")
.addField("**__Silicon Valley Competitive Record__**", "```diff\n"
+ "+ era-20,000 / JUG$-7,365\n"
+ "+ era-28,040 / The Pick-ups-27,515\n"
+ "+ era-14,800 / LUHH-10,000\n"
+ "+ era-15,000 / 悪魔-10,665\n"
+ "+ era-20,000 / Dyna-8,600\n"
+ "+ era-42,375  / verb-27,715\n"
+ "+ era-19,580 / Dyna-16305\n"
+ "```\n")
client.on('message', message => {
if (tL(message.content) === 'era sv') {
message.channel.sendEmbed(sv);
    }
});

let fra = new Discord.RichEmbed()
.setColor(1752220)
.addField("**__Frankfurt Comp Team__**", "```ini\n"
+"- MadaMada[Leader]\n"
+"- kyroF\n"
+"- iguessmysmurf\n"
+"- Halloluke0201\n"
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
if (tL(message.content) === 'era coin flip') {
message.reply(coinflip());
    }
});

client.on('message', message => {
if (tL(message.content) === 'era ball') {
message.reply(ball());
    }
});

client.on('message', message => {
if (tL(message.content) === 'era scope') {
message.channel.send(scope());
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
