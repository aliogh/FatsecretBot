const Telegraf = require('telegraf')

const app = new Telegraf('225652257:AAHLWn6po-C7yZB005PMOboUfMu_KXMVNV4')

var myPythonScriptPath = 'prueba.py';

// Use python shell
var PythonShell = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);

pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
    if (err){
        throw err;
    };

    console.log('finished');
});


app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

app.hears('hi', (ctx) => ctx.reply('pruebaaaa'))
app.hears('hola', (ctx) => ctx.reply('Sala aga Kayvan!'))
app.on('sticker', (ctx) => ctx.reply('👍'))

app.startPolling()

