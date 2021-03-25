const {searchForGif} = require('../services.js');
module.exports = {
    name: 'giyu-gif',
    description: 'Send a random giyu gif.',
    execute(dj_yasuo, msg, args, Discord) {
        let promise = searchForGif('giyuu tomioka');
        promise.then((gif) => msg.reply(gif));
    }
};
