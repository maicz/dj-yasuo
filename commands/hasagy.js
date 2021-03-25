const { randomEmoji } = require("../services.js");

module.exports = {
  name: "hasagy",
  description: "A true geeting",
  execute(dj_yasuo, msg, args, Discord) {
    message.reply("HASAYOOOOO! " + randomEmoji() + " " + randomEmoji());
  },
};
