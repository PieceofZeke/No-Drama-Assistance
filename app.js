// Calling Packages
const Discord = require('discord.js');
const bot = new Discord.Client();


// Global Settings
const prefix = '~'; // This is the prefix, you can change it to whatever you want.

// Listener Event: Runs whenever a message is received.
bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.


    // Commands

    // Ping
    if (msg === prefix + 'PING') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

        // Now, let's send a response.
        message.channel.send('Ping!'); // This 'sends' the message to the channel the message was in. You can change what is in the message to whatever you want.

    }


});

// Listener Event: Runs whenever the bot sends a ready event (when it first starts for example)
bot.on('ready', () => {
  console.log('Bot Launched...') //Runs when the bot is launched.

  //You can put any code you want here, it will run when you turn on your bot.

  //Game status
  bot.user.setStatus('Online') //Your status goes here; it can be 'Online', 'Idle', etc
    // We can post into the console that the bot launched.
    console.log('Bot started.');

    //game & streaming
    bot.user.setGame('completely nothing') //You can change whatever you want.

    //To set up a stream, add another option like This
    bot.user.setGame('completely nothing, just watching the server. ^.^', 'https://twitch.tv/truepixels')

});


bot.login('NTQwMzA0NTg0Mjg0MDQ1MzEy.DzSKWw.36HUDF4YlJ_5cwu1-8JQ3IA2HhY');
