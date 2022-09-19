const isProd = require("./helpers/isProd");
module.exports = {
	bot_Token: process.env[isProd ? 'BOT_TOKEN' : 'BOT_TOKEN_TEST'],
	chat_id: process.env[isProd ? 'CHAT_ID' : 'CHAT_ID_TEST'],
}
