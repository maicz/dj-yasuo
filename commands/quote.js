const { randomQuote, randomEmoji } = require("../services.js");
module.exports = {
  name: "quote",
  description: "Prints a random yasuo quote with some emojis",
  execute(message, args) {
    message.reply(randomQuote() + " " + randomEmoji() + " " + randomEmoji());
    
  },
};
