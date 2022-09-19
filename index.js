require('dotenv').config()
const express = require('express')
const {Telegraf, session, Scenes} = require('telegraf')
const actions = require('./actions/')

const texts = require("./helpers/texts");
const commands = require("./helpers/commands")
const inlineMenu = require("./helpers/inlineMenu")
const backBtn = require("./helpers/backBtn");
const { bot_Token } = require("./config");

const app = express();
// scene
const {NEWS_SCENE, newsScene} = require("./scenes/news");

const bot = new Telegraf(bot_Token)
const stage = new Scenes.Stage([newsScene])

bot.use(session())
bot.use(stage.middleware())

bot.hears(NEWS_SCENE)
bot.on('new_cannel_members', (ctx) => console.log(ctx.message.new_chat_members))


bot.start((ctx) => ctx.reply(texts.start, inlineMenu))

bot.help((ctx) => ctx.reply(
	`/${commands.start} - команда для запуску Бота \n` +
	`/${commands.help} - побачити всі команди \n` +
	`/${commands.helpUs} - отримати реквізити \n` +
	`/${commands.whoWeAre} - коротко про нас \n` +
	`/${commands.contact} - посилання на наші ресурси \n` +
	`/${commands.sendNews} - поділитися з нами новиною \n`
))

// render actions
Object.entries(actions).forEach(([key, cb]) => {
	const isBackBtn = key === commands.back_to_menu
	
	bot.action(key, async (ctx) => {
		await cb(ctx, isBackBtn ? inlineMenu : backBtn);
	})
	bot.command(key, ctx => cb(ctx, backBtn))
});

process.on('uncaughtException', function (error) {
	console.log("\x1b[31m", "Exception: ", error, "\x1b[0m");
});

bot.launch().then(() => {
	console.log('started')
}).catch(err => {
	console.error(err);
});

app.get('/', (req, res) => {
	res.send('Bot is working!')
})

app.listen(process.env.PORT || 8080, () => {
	console.log('listening port ' + process.env.PORT || 8080)
})
