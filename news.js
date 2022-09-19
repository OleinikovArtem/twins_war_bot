const {Scenes, Composer, Markup} = require('telegraf')
const inlineMenu = require("../helpers/inlineMenu");
const { chat_id } = require("../config");

const NEWS_SCENE = 'NEWS_SCENE'
const CLOSE_SCENE = 'CLOSE_SCENE'
let isOpened = false;
let sentFinishMessage = false;

const startStep = new Composer()

startStep.on('photo', async (ctx) => {
	const {
		photo,
		caption,
		from: { username },
	} = ctx.message;
	await askToStopScene(ctx, 2500);
	
	await ctx.tg.sendPhoto(chat_id, photo.pop().file_id, { caption: `Пише: @${username} / #${username} \n\n` + (caption || '') })
})

startStep.on('video', async (ctx) => {
	const {
		video,
		caption,
		from: { username },
	} = ctx.message;
	await askToStopScene(ctx, 2500);
	
	await ctx.tg.sendVideo(chat_id, video.file_id, { caption: `Пише: @${username} / #${username} \n\n` + (caption || '') })
})

startStep.action(CLOSE_SCENE, closeScene)

startStep.on('message', async (ctx) => {
	try {
		const {
			from: { username, firstname, lastname },
			text,
		} = ctx.message;

		if (text === 'Готово') {
			sentFinishMessage = false;
			await ctx.reply('Дякую за інформацію! \nСлава України!', Markup.keyboard([], ));
			return await closeScene(ctx);
		}
		
		ctx.wizard.state.date = { username, firstname, lastname };
		
		const message = `Пише: @${username} / #${username} \n\n` + (text || '');
		await ctx.tg.sendMessage(chat_id, message);
		
		await askToStopScene(ctx, 2500);
		
		isOpened = true;
	} catch(e) {
		console.error(e);
	}
})

const newsScene = new Scenes.WizardScene(NEWS_SCENE, startStep);

async function askToStopScene(ctx, time = 0) {
	if (!sentFinishMessage) {
		setTimeout(async () => {
			await ctx.reply(
				'Якщо ти хочешь надіслати щось-ще, просто надсилай в повідомленні. \nЯкщо закінчив, жмакай на кнопку щоб повернутися до меню',
				Markup.keyboard(['Готово'])
					.oneTime()
					.resize()
			)
		}, time);
	}
	
	sentFinishMessage = true
};

async function closeScene(ctx) {
	await ctx.scene.leave()
	await ctx.replyWithHTML('Що далі?', inlineMenu)
	isOpened = false
};


module.exports = {
	NEWS_SCENE,
	newsScene
}
