module.exports = {
    name: 'leave',
    description: 'Stop playing music and leave the channel',
    async execute(dj_yasuo, msg, args, Discord) {
        const voiceChannel = msg.member.voice.channel;
        if(!voiceChannel) return msg.reply('You need to be in a voice channel to stop the music!');
        await voiceChannel.leave();
        await msg.channel.send('Leaving channel :smiling_face_with_tear:');
    }
}
