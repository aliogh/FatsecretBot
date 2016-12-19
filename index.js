const Telegraf = require('telegraf')

const app = new Telegraf('225652257:AAHLWn6po-C7yZB005PMOboUfMu_KXMVNV4')

app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

app.hears('hi', (ctx) => ctx.reply('Hey there!'))
app.on('sticker', (ctx) => ctx.reply('👍'))

app.startPolling()