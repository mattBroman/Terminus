var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

var CopyPastas = [
'If my girl👧😍 and my beyblades💯🔥 are both drowning🌊😦 and I could only save one😄☝️️ you can Catch me letting it rip at my girls funeral😅👻💀 Cause it\'s bey blade or catch a fade my nigga🙏👊 😠💯😭',
'My teacher said to my I\'m a failure, that I\'ll never amount to anything. I scoffed at him. Shocked, my teacher asked what\'s so funny, my future is on the line. "Well...you see professor" I say as the teacher prepares to laugh at my answer, rebuttal at hand. "I watch Rick and Morty." The class is shocked, they merely watch pleb shows like the big bang theory to feign intelligence, not grasping the humor. "...how? I can\'t even understand it\'s sheer nuance and subtlety." "Well you see...WUBBA LUBBA DUB DUB!" One line student laughs in the back, I turn to see a who this fellow genius is. It\'s none other than Albert Einstein.',
'What you guys have no Szechuan sauce? I WANT SZECHUAN SAUCE! WHERE\'S MY SZECHUAN SAUCE??!! I\'M PICKLE RICK!!!!!!!! WUBBALUBBADUBDUB!!!!!! I\'M PICKLE RICK!!!! REEEEEEEEE!!!! REEEEE!!!! REEEEE!!!! IM PICKLE REEEEEEEEE!!!! REEEEEE!!!!! REEEEE!!!!!!',
'DUUUUUUUUUUUUUUUUUUUUUUUUUUUUDE DUDE DUDE DUDE DUDE DUDE DUDE DUDE FUCKING WEEEEEEEEED AHAHAHAHAHAHAHA DUDE!!!!!!!!!! WEED!!!!!!!!!!!! hits bong FUCKING DUUUUUUDE that WEEED like just...................DUDE LMFFFFFAAAAAAOOOO i am so fucking HIGH on WEED right now XD WEEEEEEEEEEEEEEEEEEEEEEEEEEEED holla my DUDE!!!!!!!!!!!!!!JUST.........ROLL................MY.......................JOINT......................UP........................................AYYYYYYYYYYYYYYYYY DANK DANK DANK WEED'
];

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /haha/,
      nickToNicc = /\.*nick\.*/i;
      copyPasta = /\.*@Terminus\.*/i;
      np = /\.*np\.*/i;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(1);
    this.res.end();
  } else if (request.text && nickToNicc.test(request.text)) {
	this.res.writeHead(200);
    postMessage(2);
    this.res.end();
  } else if (request.text && copyPasta.test(request.text)) {
	this.res.writeHead(200);
    postMessage(3);
    this.res.end();
  } else if (request.text && np.test(request.text)) {
	this.res.writeHead(200);
    postMessage(4);
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(option) {
  var botResponse, options, body, botReq;
  
  switch(option) {
  case 1 :
    botResponse = cool();
    break;
  case 2:
	botResponse = '*nicc';
	break;
  case 3:
	botResponse = CopyPastas[Math.floor(Math.random() * CopyPastas.length)];
	break;
  case 4:
	botResponse = 'discovered';
	break;
  }

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
