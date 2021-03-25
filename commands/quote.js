const {randomQuote, randomEmoji} = require("../services.js");
module.exports = {
    name: "quote",
    description: "Prints a random yasuo quote with some emojis",
    execute(dj_yasuo, msg, args, Discord) {
        msg.reply(randomQuote() + " " + randomEmoji() + " " + randomEmoji());

    },
};
