const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Google Home!');
});

client.on('message', message => {
    if (message.content === 'ok google') {
    	message.channel.send('Hello google home is at your service');
  	}
});

client.on('message', message => {
    if (message.content === 'ok google what is the weather like today?') {
    	message.reply('https://www.accuweather.com/');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
