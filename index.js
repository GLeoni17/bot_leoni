const Discord = require('discord.js');

const bot = new Discord.Client();

const token = '*senha censurada*'

bot.login(token);

bot.on('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.content === 'E ai galera!'){
        msg.reply("Ola, seja bem vindo ao nosso canal!")
    }
})
