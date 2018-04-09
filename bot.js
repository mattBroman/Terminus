const HTTPS = require('https');


const botID = process.env.BOT_ID;


const commands = [Chase, Jc, Term, Nikk, Haha, Nicc, FastSqr, OwO, Buldge, Layluh, Lmao, Lorn, Malloc, Nanomachines, Np,
                  Oclelote, RNH, Salami, WTF, Bomb ];

let localMessage = function(request) {
  for (let i = 0; i <  commands.length; i++) {
    try {
      if (request && commands[i].regex.test(request)) {
        console.log(commands[i].message());
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
        postMessage(commands[i].message());
        break;
      }
    } catch(err) {
      console.log(err);
    } 
  }
  this.res.end();
}

function postMessage(botResponse) {
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

exports.respond = respond;
exports.localMessage = localMessage;
