module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - На този сървър не се възпроизвежда музика!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Не сте свързани в нито един гласов канал!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Не мога да се присъединя към вашия гласов канал, моля, проверете разрешенията ми!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Нещо се обърка ... Грешка: ${error}`);
    };
};
