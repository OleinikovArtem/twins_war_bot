const commands = require("./commands")
const buttons = require("./buttons")

const {Markup} = require("telegraf");

const menu = Markup.keyboard([
	[{text: buttons[commands.whoWeAre], callback_data: commands.whoWeAre}],
	[{text: buttons[commands.contact], callback_data: commands.contact}],
	[{text: buttons[commands.helpUs], callback_data: commands.helpUs}],
	[{text: buttons[commands.sendNews], callback_data: commands.sendNews}]
]).oneTime().resize()


module.exports = menu
