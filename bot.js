const HTTPS            = require('https');
const introMessage     = 'turned off because heroku can\' run a server. ;
const errorMessage     = 'That command\'s broken, probably Matt\'s fault';
const recursionWarning = 'Y\'all got reursion in that command. be careful.';
const Globals      = require('./globals.js');
const Chase        = require('./commands/chase.js');
const Jc           = require('./commands/jc.js');
const Term         = require('./commands/copypastas.js');
const Nikk         = require('./commands/nikk.js');
const Haha         = require('./commands/haha.js');
const Nicc         = require('./commands/nicc.js');
const FastSqr      = require('./commands/wtf.js');
const OwO          = require('./commands/0w0.js');
const Buldge       = require('./commands/buldge.js');
const Layluh       = require('./commands/layluh.js');
const Lmao         = require('./commands/lmao.js');
const Lorn         = require('./commands/lorn.js');
const Malloc       = require('./commands/malloc.js');
const Nanomachines = require('./commands/nanomachines.js');
const Np           = require('./commands/np.js');
const Oclelote     = require('./commands/ocelote.js');
const RNH          = require('./commands/RNH.js');
const Salami       = require('./commands/salami.js');
const WTF          = require('./commands/wtf.js');
const Bomb         = require('./commands/bomb.js');
const Die          = require('./commands/die.js');
const Revive       = require('./commands/live.js');
const Gachi        = require('./commands/van.js');
const maybe2       = require('./commands/2.js')


const botID = process.env.BOT_ID;
Globals.alive = true;
let lastMessage = null;

const commands = [Chase, Jc, Term, Nikk, Haha, Nicc, FastSqr, OwO, Buldge, Layluh, Lmao, Lorn, Malloc, Nanomachines, Np,
                  Oclelote, RNH, Salami, WTF, Bomb, Die, Revive, Gachi, maybe2 ];

let localMessage = function(request) {
  for (let i = 0; i <  commands.length; i++) {
    try {
      if (request && commands[i].regex.test(request)) {
        mes = commands[i].message()
        testMessage(mes)
        break;
      }
    } catch(err) {
      console.log(err);
    } 
  }
}

let respond = function() {
  let request = JSON.parse(this.req.chunks[0])
  this.res.writeHead(200);
  for (let i = 0; i < commands.length; i++) {
    try {
      if (request.text && commands[i].regex.test(request.text)) {
        if (request.txt !== lastMessage) {
          lastMessage = commands[i].message()
          postMessage(lastMessage);
        } else {
          console.log(recursionWarning)
          lastMessage = recursionWarning;
        }
      }
    } catch(err) {
      console.log(errorMessage);
      break;
    } 
  }
  this.res.end();
}

function postMessage(botResponse) {
  if (Globals.alive) {
    let options, body, botReq;		  

    options = {
      hostname: 'api.groupme.com',
      path: '/v3/bots/post',
      method: 'POST'
    };

    body = {
      "bot_id" : botID,
      "text" : botResponse
    };

    console.log('sending ' + botResponse + ' to ' + botID);

    botReq = HTTPS.request(options, function(res) {
        if(res.statusCode == 202) {
          //neat
        } else {
          console.log('rejecting bad status code ' + res.statusCode);
        }
    });

    botReq.on('error', function(err) {
      console.log('error posting message '  + JSON.stringify(err));
    });
    botReq.on('timeout', function(err) {
      console.log('timeout posting message '  + JSON.stringify(err));
    });
    botReq.end(JSON.stringify(body));
  }
}

let testMessage = function(mess) {
  if (Globals.alive) {
    console.log(mess);
  }
}

exports.respond = respond;
exports.localMessage = localMessage;
exports.testMessage = testMessage;
exports.postMessage = postMessage;
exports.intro = postMessage(introMessage);
