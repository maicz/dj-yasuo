const {searchForGif} = require('../services.js');
module.exports = {
    name: 'giyu-gif',
    description: 'Send a random giyu gif.',
    execute(message, args) {
        let promise = searchForGif('giyuu tomioka');
        promise.then((gif) => message.reply(gif));
    }
};
