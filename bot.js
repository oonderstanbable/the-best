const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Google Home!');
});
function coinflip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
client.on('message', message => {
    if (message.content === 'ok google') {
        message.channel.send('Hello, Google Home is at your service.');
      }
});

client.on('message', message => {
    if (message.content === 'ok google what is the weather like today?') {
        message.reply('https://www.accuweather.com/');
      }
});


client.on('message', message => {
    if (message.content === 'ok google when does OOOPS have a birthday?') {
        message.reply('OOOPS has a birthday on November 3rd every year... like your birthday should be...');
      }
});


client.on('message', message => {
    if (message.content === 'ok google set a reminder?') {
        message.reply('No im not gonna do that what do you think I am... Google Home or something... set your own reminder');
      }
});

client.on('message', message => {
    if (message.content === 'ok google what is 1 + 1?') {
        message.reply('OBVIOUSLY A FUCKING WINDOW... DUMMY');
      }
});
client.on('message', message => {
    if (message.content === 'ok google coinflip') {
        message.reply(coinflip());
      }
});

client.on('message', message => {
    if (message.content === 'ok google can you show me the default dance?') {
        message.reply('no I am google not no epicgames');
      }
});

client.on('message', message => {
    if (message.content === 'ok google when does manbundan have his birthday?') {
        message.reply('Janurary 2nd or some shit like that');
      }
});

client.on('message', message => {
    if (message.content === 'ok google why is OOOPS so bad a krunker?') {
        message.reply('Maybe he is bad but he is far better than you so if he is bad what does that make you... (hint FUCKING GARBAGE)');
      }
});

client.on('message', message => {
    if (message.content === 'ok google gay?') {
        message.reply('Brandor is the most gay person in yodo');
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
