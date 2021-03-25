module.exports = (dj_yasuo, Discord, msg) => {
    const prefix = '!';
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const input = args.shift().toLowerCase();
    const command = client.commands.get(input);
    if (command) {
        command.execute(dj_yasuo, message, args, Discord);
    }



}
