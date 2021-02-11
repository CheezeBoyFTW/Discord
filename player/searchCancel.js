module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Не сте предоставили валиден отговор ... Моля, изпратете командата отново!`);
};