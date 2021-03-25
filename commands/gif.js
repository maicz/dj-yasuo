const {searchForGif} = require("../services.js");
module.exports = {
    name: "gif",
    description: "Send a random yasuo gif.",
    execute(dj_yasuo, msg, args, Discord) {
        let promise = searchForGif(args.join(' '));
        promise.then((gif) => msg.reply(gif));
    },
};
