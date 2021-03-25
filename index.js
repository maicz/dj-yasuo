const Discord = require('discord.js');
const dj_yasuo = new Discord.Client();

dj_yasuo.commands = new Discord.Collection();
dj_yasuo.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(dj_yasuo, Discord);
})

dj_yasuo.login('ODE4NzU2ODE2MzA1MjU4NTI2.YEcstA.kva4Xiaijv8X73pzsG06jMS9o8Q');
