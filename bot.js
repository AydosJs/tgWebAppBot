const { Telegraf } = require("telegraf");

const TOKEN = `6422144117:AAFyAMiQym1MR2TBVBhJkobbCpZwOwlQqHQ`;
const bot = new Telegraf(TOKEN);

const webLink = "https://main--charming-chaja-a8f8ab.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome WEB APP!", {
    reply_markup: {
      keyboard: [[{ text: "Web App", web_app: { url: webLink } }]],
    },
  })
);

bot.launch();
