const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Dz Pro Gamers Guard!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NjA3MjY2NjczMzIxMzEyMjU3.XVV_Nw.xP9NBFGwhxApR7iJ8GNMh7ByCsQ);
