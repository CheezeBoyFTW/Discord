module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Не сте в гласов канал!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Не сте в същия гласов канал!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В момента няма музика!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - В опашката има само една песен.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Опашката току-що беше **removed** !`);
    },
};