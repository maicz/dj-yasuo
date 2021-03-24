const Discord = require('discord.js');
const dj_yasuo = new Discord.Client();
const fs = require('fs');
const prefix = '!';

dj_yasuo.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync('./commands/')
    .filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    dj_yasuo.commands.set(command.name, command);
}

dj_yasuo.once('ready', () => {
    console.log('Dj Yasuo is online!');
});

dj_yasuo.on('message', (msg) => {

    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    switch (command) {
        case('commands') : {
            dj_yasuo.commands.get(command).execute(msg, dj_yasuo.commands);
            break;
        }
        case('embed'): {
            dj_yasuo.commands.get(command).execute(msg, args, Discord);
            break;
        }
        case('play'): {
            dj_yasuo.commands.get(command).execute(msg, args, Discord);
            break;
        }
        case('leave'): {
            dj_yasuo.commands.get(command).execute(msg, args, Discord);
            break;
        }
        default: {
            dj_yasuo.commands.get(command).execute(msg, args);
        }
    }
});

dj_yasuo.login('ODE4NzU2ODE2MzA1MjU4NTI2.YEcstA.kva4Xiaijv8X73pzsG06jMS9o8Q');
