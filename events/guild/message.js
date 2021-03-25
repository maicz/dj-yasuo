module.exports = (Discord, dj_yasuo, msg) => {
    const prefix = '!';
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const input = args.shift().toLowerCase();
    const command = dj_yasuo.commands.get(input);
    if (command) {
        command.execute(dj_yasuo, msg, args, Discord);
    }
}
