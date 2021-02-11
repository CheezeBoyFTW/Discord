module.exports = async (client) => {
    console.log(`Готово нататък ${client.guilds.cache.size} сървъри, общо за ${client.users.cache.size} потребители`);

    client.user.setActivity(client.config.discord.activity);
};