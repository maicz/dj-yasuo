const fs = require('fs');

module.exports = {
    name: 'commands',
    description: 'List all available commands',
    execute(dj_yasuo, msg, args, Discord) {
        let result = [];
        dj_yasuo.commands.forEach(o => result.push('!' + o.name + ' : ' + o.description));
        msg.reply(result);
    }
}
