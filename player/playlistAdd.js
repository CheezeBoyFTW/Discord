module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} е добавен към опашката (**${playlist.tracks.length}** songs) !`);
};