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
const searchForGif = (query) => {
    if (!query) query = 'dj yasuo';
    return giphy.search('gifs', {"q": query, "limit": 3})
        .then((response) => {
            let url = response.data[Math.floor(Math.random() * 3)].url;
            console.log(`Gif for query: ${query} -> ${url}`);
            return url;
        })
        .catch((err) => {
            return err;
        })
}

module.exports = {randomQuote, randomEmoji, searchForGif};
