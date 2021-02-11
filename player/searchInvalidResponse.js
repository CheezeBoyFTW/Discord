module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Изборът беше **cancelled** !`);
    } else message.channel.send(`${client.emotes.error} - Трябва да изпратите валиден номер между **1** и **${tracks.length}** !`);
};