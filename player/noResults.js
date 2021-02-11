module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Няма намерени резултати в YouTube за ${query} !`);
};