module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Музиката спря, тъй като в опашката вече няма музика!`);
};