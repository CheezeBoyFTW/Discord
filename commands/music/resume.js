module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Не сте в гласов канал!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Не сте в същия гласов канал!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В момента няма музика!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Музиката вече свири!`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - Песен ${client.player.getQueue(message).playing.title} възобновено!`);
    },
};