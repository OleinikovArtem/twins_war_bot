const commands = require("./commands")
const buttons = require("./buttons")

const {Markup} = require("telegraf");

const inlineMenu = Markup.inlineKeyboard([
	[Markup.button.callback(buttons[commands.whoWeAre], commands.whoWeAre)],
	[Markup.button.callback(buttons[commands.contact], commands.contact)],
	[Markup.button.callback(buttons[commands.helpUs], commands.helpUs)],
	[Markup.button.callback(buttons[commands.sendNews], commands.sendNews)],
]).resize(true)

module.exports = inlineMenu
