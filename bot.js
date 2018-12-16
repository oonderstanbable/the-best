const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'Ok Google'

client.on('ready', () => {
    console.log('Google Home!');
});

client.on('message', message => {
    let msg = message.content.toUpperCase()
    
    if (msg.content === prefix) {
        message.channel.send('Hello, google home is at your service!')
    }
    
    if (msg.content === prefix + ' what is the weather like today?') {
        message.channel.send('https://www.accuweather.com/%27')
    }
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
