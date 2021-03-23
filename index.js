const { randomEmoji, randomQuote, getCommands, searchForGif } = require('./services.js');
const Discord = require('discord.js');
const dj_yasuo = new Discord.Client();

dj_yasuo.once('ready', () => {
    console.log('Dj Yasuo is online!');
})

dj_yasuo.on('message', msg => {
    if (msg.content === '!gif') {
        let promise = searchForGif();
        promise.then((gif) => msg.reply(gif));
    }

    if (msg.content === '!commands') {
        msg.reply(getCommands());
    }
    if (msg.content === '!hasagy') {
        msg.reply('HASAYOOOO!' + randomEmoji());
    }
    if (msg.content === '!quote') {
        msg.reply(
            randomQuote() +
            ' ' +
            randomEmoji() +
            randomEmoji());
    }
    if (msg.content === '!opgg') {
        msg.reply('Here you go kids' + randomEmoji() + '-> https://eune.op.gg/multi/query=Giyu%20Tom%C3%ADoka%20%2C%C3%89velyne%20%2CDavid0815%20');
    }
})

dj_yasuo.login('ODE4NzU2ODE2MzA1MjU4NTI2.YEcstA.kva4Xiaijv8X73pzsG06jMS9o8Q');
