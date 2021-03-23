const { randomEmoji } = require("../services.js");

module.exports = {
  name: "hasagy",
  description: "A true geeting",
  execute(message, args) {
    message.reply("HASAYOOOOO! " + randomEmoji() + " " + randomEmoji());
  },
};
