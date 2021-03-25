const fs = require('fs');
module.exports = (dj_yasuo, Discord) => {
    const commandFiles = fs.readdirSync('./commands/').filter((file) => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        if (command.name) {
            dj_yasuo.commands.set(command.name, command);
        }
    }
};
