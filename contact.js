const menu = require("../helpers/mainManu");
const keyboardLinks = require("../helpers/links");

const contact = async (ctx, menu) => {
	console.log('Посилання')
	await ctx.reply('Посилання:', keyboardLinks, menu)
}

module.exports = contact
