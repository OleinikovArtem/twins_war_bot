const texts = require("../helpers/texts");

const helpUs = async (ctx, menu) => {
	await ctx.reply(texts.requisites, menu)
}

module.exports = helpUs
