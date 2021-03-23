const {commands, emojis, quotes} = require('./constants');
const giphyClient = require('giphy-js-sdk-core');

giphy = giphyClient('KYkE8ntIkRW9lLUGYEg18m3p4gUxpUzP');

const randomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
const randomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

const getCommands = () => {
    let reply = [];
    for (let [k, v] of commands.entries()) {
        reply.push(k + ' -> ' + v);
    }
    return reply;
}

const searchForGif = () => {
    return giphy.search('gifs', {"q": 'yasuo', "limit": 10})
        .then((response) => {
            return response.data[Math.floor(Math.random() * 10)].url;
        })
        .catch((err) => {
            return err;
        })
}


module.exports = {randomQuote, randomEmoji, getCommands, searchForGif};
