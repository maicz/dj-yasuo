module.exports = {
    name: 'clear',
    description: 'Clear messages that are max 14 days old. For messages older than 14 days, you have to delete them manually',
    async execute(msg, args) {
        if (!args[0]) return msg.reply('Please the amount of messages that you want to clear');
        if (isNaN(args[0])) return msg.reply('Please enter a real number');
        if (args[0] > 100) return msg.reply('You cannot delete more than 100 messages');
        if (args[0] < 1) return msg.reply('You must delete at least 1 message');

        await msg.channel.messages.fetch({limit: args[0]}).then(messages => {
            msg.channel.bulkDelete(messages)
        });
    }
}
