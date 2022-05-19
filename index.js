require('dotenv').config()

const {Telegraf, Markup} = require('telegraf')
const texts = require("./helpers/texts");
const { links } = texts;

const commands = {
	start: 'start',
	help: 'help',
	helpUs: 'helpUs',
	whoWeAre: 'whoWeAre',
	contact: 'contact'
}

const buttons = {
	[commands.helpUs]: 'Підтримати нас',
	[commands.whoWeAre]: 'Хто Ми?',
	[commands.contact]: 'Зв’язок з нами'
}

const menu = Markup.keyboard([
	[{text: buttons[commands.whoWeAre], callback_data: commands.whoWeAre}],
	[{text: buttons[commands.contact], callback_data: commands.contact}],
	[{text: buttons[commands.helpUs], callback_data: commands.helpUs}]
])



const keyboardLinks = Markup.inlineKeyboard([
	[Markup.button.url(links.donate.title, links.donate.url)],
	[Markup.button.url(links.youtube.title, links.youtube.url)],
	[Markup.button.url(links.tg.title, links.tg.url)],
	[Markup.button.url(links.twitch.title, links.twitch.url)],
  [Markup.button.url(links.instaD.title, links.instaD.url)],
	[Markup.button.url(links.tiktokD.title, links.tiktokD.url)],
	[Markup.button.url(links.twitterD.title, links.twitterD.url)],
	
	[Markup.button.url(links.instaK.title, links.instaK.url)],
	[Markup.button.url(links.tiktokK.title, links.tiktokK.url)],
	[Markup.button.url(links.fbK.title, links.fbK.url)],
	[Markup.button.url(links.twitterK.title, links.twitterK.url)],
])

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(texts.start, menu)
)

bot.help((ctx) => ctx.reply(
	`/${commands.start} - команда для запуску Бота \n` +
	`/${commands.help} - побачити всі команди \n`))



bot.on('text', async (ctx) => {
	const { text } =  ctx.update.message;
	console.log(text, commands.whoWeAre)
	switch (text) {
		case buttons[commands.whoWeAre]:
			await ctx.reply(texts.whoWeAre + texts.whatWeDid)
			await ctx.replyWithPhoto('https://photos.app.goo.gl/hYbi55rCjK28Kg1A6')
			break;
		case buttons[commands.helpUs]:
			await ctx.reply(texts.requisites, menu)
			break;
		case buttons[commands.contact]:
			await ctx.reply('силки:', keyboardLinks, menu)
			break;
	}
})

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

console.log('started')

bot.launch()
