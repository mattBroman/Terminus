var http, director, cool, bot, router, server, port;

http        = require('http');
director    = require('director');
cool        = require('cool-ascii-faces');
bot         = require('./bot.js');
const Chase = require('./commands/chase.js');
const Jc = require('./commands/jc.js');
const Term = require('./commands/copypastas.js');
const Nikk = require('./commands/nikk.js');
const Haha = require('./commands/haha.js');
const Nicc = require('./commands/nicc.js');
const FastSqr = require('./commands/wtf.js');
const OwO = require('./commands/0w0.js');
const Buldge = require('./commands/buldge.js');
const Layluh = require('./commands/layluh.js');
const Lmao = require('./commands/lmao.js');
const Lorn = require('./commands/lorn.js');
const Malloc = require('./commands/malloc.js');
const Nanomachines = require('./commands/nanomachines.js');
const Np = require('./commands/np.js');
const Oclelote = require('./commands/ocelote.js');
const RNH = require('./commands/RNH.js');
const Salami = require('./commands/salami.js');
const WTF = require('./commands/wtf.js');
const Bomb = require('./commands/bomb.js');

router = new director.http.Router({
  '/' : {
    post: bot.respond,
    get: ping
  }
});

server = http.createServer(function (req, res) {
  req.chunks = [];
  req.on('data', function (chunk) {
    req.chunks.push(chunk.toString());
  });

  router.dispatch(req, res, function(err) {
    res.writeHead(err.status, {"Content-Type": "text/plain"});
    res.end(err.message);
  });
});

port = Number(process.env.PORT || 5000);
server.listen(port);

function ping() {
  this.res.writeHead(200);
  this.res.end("What's so funny?");
}
