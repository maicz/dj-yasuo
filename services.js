const {emojis, quotes} = require('./constants');
const giphyClient = require('giphy-js-sdk-core');

giphy = giphyClient('KYkE8ntIkRW9lLUGYEg18m3p4gUxpUzP');

/*
* Pick a random Yasuo quote from the configured quotes.
* */
const randomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

/*
* Pick a random emojy from a list of emojis.
* */
const randomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

/*
* Function used to return a gif url from giphy.
* */
const searchForGif = () => {
    return giphy.search('gifs', {"q": 'yasuo', "limit": 10})
        .then((response) => {
            return response.data[Math.floor(Math.random() * 10)].url;
        })
        .catch((err) => {
            return err;
        })
}

module.exports = {randomQuote, randomEmoji, searchForGif};
