var http, director, cool, bot, router, server, port;

http        = require('http');
director    = require('director');
cool        = require('cool-ascii-faces');
bot         = require('./bot.js');
Globals     = require('./globals.js');
const htmlPath = 'html/'


Globals.prod = true;

let customText = function() {
  Globals.renderHTML(htmlPath + 'index.html', res)
}

router = new director.http.Router({
  '/' : {
    post: bot.respond,
    get: ping
  },
  '/admin': {
    get: customText
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
