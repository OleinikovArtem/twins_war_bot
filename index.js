const commands = require("../helpers/commands");

const whoWeAre = require("./whoWeare");
const helpUs = require("./helpUs");
const contact = require("./contact");
const sendNews = require("./sendNews");
const backToMenu = require("./backToMenu");

module.exports = {
	[commands.whoWeAre]: whoWeAre,
	[commands.helpUs]: helpUs,
	[commands.contact]: contact,
	[commands.sendNews]: sendNews,
	[commands.back_to_menu]: backToMenu,
}
