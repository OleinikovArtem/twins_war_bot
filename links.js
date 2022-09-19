const texts = require("./texts");
const {Markup} = require("telegraf");
const commands = require("./commands");
const buttons = require("./buttons");

const { links } = texts;

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
	[Markup.button.callback(buttons[commands.back_to_menu], commands.back_to_menu)],
])

module.exports = keyboardLinks
