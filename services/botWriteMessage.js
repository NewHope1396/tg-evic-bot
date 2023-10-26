const TelegramBot = require("node-telegram-bot-api");

const { TOKEN, CHAT_ID } = process.env;

const writeMessage = (message) => {
  bot.sendMessage(CHAT_ID, message);
};

const bot = new TelegramBot(TOKEN, { polling: true });

module.exports = writeMessage;
