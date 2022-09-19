const {NEWS_SCENE} = require("../scenes/news");

const sendNews = async (ctx) => {
	await ctx.reply('Залиште своє повідомлення нижче 😌 Дякуємо!')
	await ctx.scene.enter(NEWS_SCENE)
}

module.exports = sendNews
