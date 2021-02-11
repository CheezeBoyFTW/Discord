module.exports = {
    name: 'volume',
    aliases: ['v'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Не сте в гласов канал!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Не сте в същия гласов канал!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В момента няма музика!`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Моля въведете валиден номер !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 9999) return message.channel.send(`${client.emotes.error} - Моля въведете валиден номер (между 1 и 9999) !`);

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send(`${client.emotes.success} - Силата на звука е зададена на **${parseInt(args[0])}%** !`);
    },
};