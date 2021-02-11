module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Не сте в гласов канал!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Не сте в същия гласов канал!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В момента няма музика!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Моля, посочете валиден филтър за активиране или деактивиране!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Този филтър не съществува, опитайте например (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Аз съм **adding** филтъра към музиката, моля изчакайте ... Забележка: колкото по-дълга е музиката, толкова по-дълго ще отнеме това.`);
        else message.channel.send(`${client.emotes.music} - Аз съм **disabling** филтъра върху музиката, моля, изчакайте ... Забележка: колкото по-дълго се възпроизвежда музиката, толкова по-дълго ще отнеме това.`);
    },
};