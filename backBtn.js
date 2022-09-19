const {Markup} = require("telegraf");
const buttons = require("./buttons");
const commands = require("./commands");

const backBtn = Markup.inlineKeyboard([
		[Markup.button.callback(buttons[commands.back_to_menu], commands.back_to_menu)],
	]).resize(true)

module.exports = backBtn
