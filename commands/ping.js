module.exports = {
    name: 'ping',
    description: 'This is a ping command',
    execute(dj_yasuo, msg, args, Discord) {
        msg.channel.send('pong');
    }
}
