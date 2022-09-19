
const backToMenu = async (ctx, menu, text) => {
	await ctx.telegram.sendMessage(
		ctx.from.id,
		'.' || text,
		menu
	)
}

module.exports = backToMenu
