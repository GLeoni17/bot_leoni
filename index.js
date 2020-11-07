const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'Nzc0NzIyNTUxMDE1NTM4NzA4.X6b6mQ.EVdw6g3Gtd-BTGGr3z6xdSWOub8'

bot.login(token);

bot.on('ready', () => {
    console.log('estou pronto para ser usado')
})

bot.on('message', msg => {
    if (msg.content === 'E ai galera!'){
        msg.reply("Ola, seja bem vindo ao nosso canal!")
    }
})