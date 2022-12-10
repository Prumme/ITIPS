const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('oui')
        .setDescription('Replies with non!'),
    async execute(interaction) {
        await interaction.reply('non');
    },
};