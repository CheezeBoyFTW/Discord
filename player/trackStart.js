module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Сега свири ${track.title} в ${message.member.voice.channel.name} ...`);
};