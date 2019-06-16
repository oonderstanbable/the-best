const Discord = require('discord.js');
const client = new Discord.Client();
//const urban = require('urban.js');

client.on('ready', () => {
    console.log('era clan!');
});

client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Members");
    member.addRole(role).catch(console.error);
});


function coinflip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
function ball() {
    choices = ["penis","please try again","nah man I will not answer you","get out of my face","you are beautiful just the way you are","you are loved by OOOPS","you will be banned from this server one day","you are gay"];
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

client.on("message",a=>{mV=a.content.split(" "),mV.length>=7&&"ok google what is"==tL(a.content.slice(0,17))&&iN(mV[4])&&iO(mV[5])&&iN(mV[6])&&a.channel.send(Math.round(1e4*mC[mV[5]](parseInt(mV[4]),parseInt(mV[6])))/1e4)});

        let embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Hey, I'm Google home bot", "welcome")
        .addField("Commands Available:", "```era\n"
        + "era flip a coin\n"
        + "era ball\n"
        + "era why is OOOPS so bad a krunker?\n"
        + "era gay?\n"
        + "era twitter?```");
client.on('message', message => {
    if (tL(message.content) === 'era help') {
        message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (tL(message.content) === 'era when does OOOPS have his birthday?') {
        message.reply('OOOPS has a birthday on November 3rd every year... like your birthday should be...');
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
    if (tL(message.content) === 'era why is OOOPS so bad a krunker?') {
        message.reply('Maybe he is bad but he is far better than you so if he is bad what does that make you... (hint FUCKING GARBAGE)');
    }
});

client.on('message', message => {
    if (tL(message.content) === 'era gay?') {
        message.reply('Sonder is the gayest person in the world');
    }
});

client.on('message', message => {
    if (tL(message.content) === 'era twitter?') {
        message.reply('https://twitter.com/OOnderstandable');
    }
});

/*client.on('message', message => {
    if (tL(message.content.slice(0,15)) === 'ok google urban') {
        urban(tL(message.content).slice(15)).then(function(value) {
        wordArray = JSON.parse(JSON.stringify(value));
        message.channel.send({"embed":{"color":15229474,"fields":[{"name":"Word:","value":cL(wordArray['word'])},{"name":"Definition:","value":cL(wordArray['definition'])},{"name":"Example:","value":cL(wordArray['example'])}]}});
        });
    }
});*/

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
