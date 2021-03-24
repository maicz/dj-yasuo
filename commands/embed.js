module.exports = {
    name: 'embed',
    description: 'Show off a cool embed thingy',
    execute(msg, args, discord) {
        const embed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(':fire:Giyuu senpai:fire:')
            .setURL('https://kimetsu-no-yaiba.fandom.com/wiki/Giyu_Tomioka')
            .setAuthor('Mihai', 'https://i.pinimg.com/564x/dd/67/a0/dd67a0f885314d4da954843dac7dc4d1.jpg', 'https://kimetsu-no-yaiba.fandom.com/wiki/Giyu_Tomioka')
            .setDescription('Giyu is here :dash: :poo: :fire:')
            .setThumbnail('https://i.pinimg.com/564x/6b/e3/fb/6be3fb6e9a638fc57b4166241916cfc1.jpg')
            .addFields(
                {name: '\u200B', value: '\u200B'},
                {name: 'Prepare for trouble', value: 'And make it double', inline: true},
            )
            .setImage('https://i.pinimg.com/564x/dd/67/a0/dd67a0f885314d4da954843dac7dc4d1.jpg')
            .setTimestamp()
            .setFooter('@Copywrong Mihai Z 2021 yolo banolo')
        msg.channel.send(embed);
    }
}
