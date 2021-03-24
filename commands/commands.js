module.exports = {
    name: 'commands',
    description: 'List all available commands',
    execute(msg, args) {
        let result = [];
        args.forEach(o => result.push('!' + o.name + ' : ' + o.description));
        msg.reply(result);
    }
}
