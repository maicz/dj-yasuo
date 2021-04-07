const {emojis, quotes} = require('./constants');

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

module.exports = {randomQuote, randomEmoji};
