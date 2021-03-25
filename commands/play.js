const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(msg, args) {

        /*
        * Do some basic checks for permissions
        * */
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.channel.reply('You need to be in a voice channel to execute that command');

        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) return msg.reply('You do not have the correct permissions. Sorry buddy..');
        if (!permissions.has('SPEAK')) return msg.reply('You do not have the correct permissions. Sorry buddy..');

        /*
        * Check if the user provided some query
        * */
        if (!args.length) return msg.reply('You need to tell me what to play bro');

        const validURL = (str) => {
            const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            return regex.test(str);
        }

        if (validURL(args[0])) {
            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () => {
                    voiceChannel.leave();
                });
            await msg.reply(`:thumbsup: Now playing ***Your link***`);
            return;
        }

        /*
        * Connect to the voice channel, run the user's query using yt-search
        * and fetch the first video.
        * */
        const connection = await voiceChannel.join();
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        /*
        * Get the video url and filter so that the bot
        * plays only the audio stream.
        * */
        if (video) {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () => {
                    voiceChannel.leave();
                });

            /*
            * Reply to the user that the song is playing.
            * */
            await msg.reply(`:thumbsup: Now playing ***${video.title}***`);
        } else {
            msg.reply('No video results found');
        }
    }
}


