const { searchForGif } = require("../services.js");
module.exports = {
  name: "gif",
  description: "Send a random yasuo gif.",
  execute(message, args) {
    let promise = searchForGif();
    promise.then((gif) => message.reply(gif));
  },
};
