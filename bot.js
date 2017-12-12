var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

var CopyPastas = [
'If my girl👧😍 and my beyblades💯🔥 are both drowning🌊😦 and I could only save one😄☝️️ you can Catch me letting it rip at my girls funeral😅👻💀 Cause it\'s bey blade or catch a fade my nigga🙏👊 😠💯😭',
'My teacher said to my I\'m a failure, that I\'ll never amount to anything. I scoffed at him. Shocked, my teacher asked what\'s so funny, my future is on the line. "Well...you see professor" I say as the teacher prepares to laugh at my answer, rebuttal at hand. "I watch Rick and Morty." The class is shocked, they merely watch pleb shows like the big bang theory to feign intelligence, not grasping the humor. "...how? I can\'t even understand it\'s sheer nuance and subtlety." "Well you see...WUBBA LUBBA DUB DUB!" One line student laughs in the back, I turn to see a who this fellow genius is. It\'s none other than Albert Einstein.',
'What you guys have no Szechuan sauce? I WANT SZECHUAN SAUCE! WHERE\'S MY SZECHUAN SAUCE??!! I\'M PICKLE RICK!!!!!!!! WUBBALUBBADUBDUB!!!!!! I\'M PICKLE RICK!!!! REEEEEEEEE!!!! REEEEE!!!! REEEEE!!!! IM PICKLE REEEEEEEEE!!!! REEEEEE!!!!! REEEEE!!!!!!',
'DUUUUUUUUUUUUUUUUUUUUUUUUUUUUDE DUDE DUDE DUDE DUDE DUDE DUDE DUDE FUCKING WEEEEEEEEED AHAHAHAHAHAHAHA DUDE!!!!!!!!!! WEED!!!!!!!!!!!! hits bong FUCKING DUUUUUUDE that WEEED like just...................DUDE LMFFFFFAAAAAAOOOO i am so fucking HIGH on WEED right now XD WEEEEEEEEEEEEEEEEEEEEEEEEEEEED holla my DUDE!!!!!!!!!!!!!!JUST.........ROLL................MY.......................JOINT......................UP........................................AYYYYYYYYYYYYYYYYY DANK DANK DANK WEED',
'Hey excuse, big guy, did you hear some noises going on in here? A couple minutes ago? I was in the other room working out. Yeah, I just finished wrestling some jabroni here and ehh... knocked him out. Jabroni? Yeah some guy just wanted to challenge me to a wrestling match, so I took him out 1 2 3. No no, well nothin, whats with the whole jabroni thing? I mean Im half italian. Well ohhh, this guy thought he was pretty tough, though he could take me, so I took a couple of rounds outta him. Well most italians do think theyre pretty tough, I think Im pretty tough. You think your pretty tough? Well, just had a match so, you know, Im pretty tired and I could go another round if thats what your into. Listen, I was in the other room, and if thats what you call a match, I got news for you buddy you aint had nothin like me.',
'Well maybe you and I should settle it then. Are you sure you know what your getting yourself into? Well, I gotta get my haircut in about half an hour, so I got some time. Well you can do that after you get outta the hospital. Well lets give it a go, your a pretty big guy. Yeah Im a pretty big guy, Im slow. Ohh but Im pretty quick so. What do you want to bet for? I dont know, what ever you want, you pick. Ill tell you what, lets uh, lets bet your ass. I win, I get your ass, hows that sound? Yeah? What, you gonna fuck me in the ass? Is that what you mean? If you want me to, you know. Well, what ever you wanna do, if thats what you want to do, you think you can beat me in 1 2 3, yeah you can fuck me in the ass, well go. You know what, youve talked too much shit, Im a Romen-Greco wrestler, you wanna just start off right now? Sure, you wanna go lil-Greco? All right lets go! Ah you like to start on bottom. You wanna get on bottom? You know thats the point you wanna be. All right lets see what you got come on man!',
'Hey buddy, I think youve got the wrong door, the leather clubs two blocks down. Fuck↗You↘ Oh, Fuck♂You leather man. Maybe you and I should settle it right here on the ring if you think your so tough. Oh yea? Ill kick your ass! Ha! Yeah right man. Lets go! Why dont you get out of that leather stuff? Ill strip down out of this and well settle it right here in the ring. What do you say? Yeah, no problem buddy! You got it. Get out of that uh, jabroni outfit. Yeah, smart ass. Ill show you whos the boss of this gym.',
'🚨🚨🚨 WEE WOO WEE WOO WEE WOO 🚨🚨🚨 YOU ARE BEING DETAINED 👮🏻👮🏻👮🏻 FOR BEING AWAKE DURING REAL NIGGA HOURS 🕐👌🏻😏 PLEASE SHOW ME YOUR REAL NIGGA REGISTRATION 🙏🏻📝 BY SMASHING THE MOTHAFUCCIN LIKE BUTTON 🙊🙌🏼🔥🔥 REAL NIGGAS ONLY!! IT DONT MATTER IF YOU UP TRAPPING OR WHAT 💦💦😩😩💯💯💯🚨🚨🚨 WEE WOO WEE WOO WEE WOO 🚨🚨🚨 YOU ARE BEING DETAINED 👮🏻👮🏻👮🏻 FOR BEING AWAKE DURING REAL NIGGA HOURS 🕐👌🏻😏 PLEASE SHOW ME YOUR REAL NIGGA REGISTRATION 🙏🏻📝 BY SMASHING THE MOTHAFUCCIN LIKE BUTTON 🙊🙌🏼🔥🔥 REAL NIGGAS ONLY!! IT DONT MATTER IF YOU UP TRAPPING OR WHAT 💦💦😩😩💯💯💯',
'My name is Terminus, Knight of Endings, and I am the fastest man alive. To the outside world I am an ordinary computer science god, but secretly with the help of my friends at Texas A&M, I fight trash memes and find other memelords like me. I hunted down the man who made a mess of the 313 groupme, but in doing so I opened up our world to new threats, and I am the only one fast enough to stop them. I am the Flash.'
];

var chasePastas = [
'How many times do I have to tell you I don\'t give a shit about the bounded buffer right now',
'I\'m done in this chat for a bit',
'also, I fixed it, no thanks to you',
'That is wrong. Do you agree?',
'I don\'t know how I can be any clearer. I DONT CARE ABOUT THE BUFFER RIGHT NOW',
'Okay, fine, but that\'s not my problem right now',
'Thanks for giving us a fucked API.',
'Forgive me for assuming that you\'d at least write a "getSize" function correctly. Apparently you can\'t even do that right.',
'Alright, I apologize to everyone for what happened earlier.\n\nBut show\'s over, let\'s all agree to be civil and keep this groupme as simply a place where we can ask each other for help and not worry about the formalities.\n\nAt this point, I\'d like to ask everyone that isn\'t in this class to please leave the groupme.',
'homework due at 11:59 pm\nStarts homework at 11:30 pm\nTurns homework in at 11:59 pm'
];

var nikkPastas = [
'Reminds me of how a lot of people bitched about having Hyunyoung Lee for 222 because you had to use LaTeX',
'Like sure latex was a bitch to use, but you got the hang of it p quick',
'@Shawn Dolifka who do you have for anth 370?',
'Our team only got half the api points',
'Am I the only one who thinks it\'s really bad that we didn\'t get our grades for the first team project until AFTER the Q drop deadline?',
'I\'m convinced tanzir just doesn\'t understand us that much, or he\'s at least expecting a bit too much',
'Btw who else is waiting on checkpoint 4 grades for the first team project?',
'the pic just isn\'t the same because tanzir is not nearly as expressive as bettati',
'Do we have to take quizzes with our section? Didn\'t see anything about it on the syllabus...',
'Bettati one is better',
'i dont have a grade for it',
'Tbh idk I never got mp3 working',
'Yeah never going above 2/3 seconds\n Probably just because I\'m on a quad core',
'I get 0 when I divide by clocks_per_sec even if I multiply by a million',
'Rip didn\'t get the internship',
'I do think I misunderstood one of my code problems though, like I think I was solving the wrong thing. I didn\'t realize until the interview time had ran out, which was a shame. On a more positive note, one of the interviewers responded to my thank you email (I still need contact information for two of my recruiters though since I got underliverable errors from my email provider). He wrote me that he was very impressed with me.',
'I feel like it went well. I actually had four interviews and most of them involved code/problem solving',
'I flew back from my interview today/yesterday if anyone is wondering',
'Got my Microsoft interview event today let\'s go bois',
'Try me',
'Not mad, just saying there\'s a line between joking and straight being a dick.\nA line that you crossed.',
'Taking it too far IMO',

];

var squareRoot = "float Q_rsqrt( float number )\n{\tlong i;\n\tfloat x2, y;\n\tconst float threehalfs = 1.5F;\n\n\tx2 = number * 0.5F;\n\ty  = number;\n\ti  = * ( long * ) &y;                     // evil floating point bit level hacking\n \ti  = 0x5f3759df - ( i >> 1 );               // what the fuck?\n  \ty  = * ( float * ) &i;\n \ty  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration\n //	y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed\n \treturn y;\n }"

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /haha/i,
      nickToNicc = /\.*nick\.*/i;
      copyPasta = /\.*@Terminus\.*/i;
      np = /\.*np\.*/i;
      lorn = /\.*lauren\.*/i;
      lmao = /\.*lmao\.*/i;
      malloc = /\.*malloc\.*/i;
      salami = /\.*mp\d\.*/i;
      bulge = /\.*bulge\.*/i
      OwO = /\.*owo\.*/i;
      realNiggaHours = /\.*real nigga hours\.*/i;
      chaseQuote = /\.*@chase\.*/i;
      leilani = /\.*leilani\.*/i;
      nikkQuote = /\.*@nikk\.*/i;
      ocelot = /\.*pretty good\.*/i;
      fastInv = /\.*fast(-|\s)?inverse square root\.*/i;
      nanomachines = /\.nanomachines\.*/i;
	

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
  } else if (request.text && lorn.test(request.text)) {
	this.res.writeHead(200);
    postMessage(5);
    this.res.end();
  } else if (request.text && lmao.test(request.text)) {
	this.res.writeHead(200);
    postMessage(6);
    this.res.end();
  } else if (request.text && malloc.test(request.text)) {
	this.res.writeHead(200);
    postMessage(7);
    this.res.end();
  } else if (request.text && salami.test(request.text)) {
	this.res.writeHead(200);
    postMessage(8);
    this.res.end();
  } else if (request.text && bulge.test(request.text)) {
	this.res.writeHead(200);
    postMessage(9);
  } else if (request.text && OwO.test(request.text)) {
	this.res.writeHead(200);
    postMessage(10);
    this.res.end();
  } else if (request.text && realNiggaHours.test(request.text)) {
	this.res.writeHead(200);
    postMessage(11);
    this.res.end();
  } else if (request.text && chaseQuote.test(request.text)) {
	this.res.writeHead(200);
    postMessage(12);
    this.res.end();  
  } else if (request.text && leilani.test(request.text)) {
	this.res.writeHead(200);
    postMessage(13);
    this.res.end();
  } else if (request.text && nikkQuote.test(request.text)) {
	this.res.writeHead(200);
    postMessage(14);
    this.res.end();
  } else if (request.text && ocelot.test(request.text)) {
	this.res.writeHead(200);
    postMessage(15);
    this.res.end();  
  } else if (request.text && fastInv.test(request.text)) {
	this.res.writeHead(200);
    postMessage(16);
    this.res.end();
    } else if (request.text && nanomachines.test(request.text)) {
      this.res.writeHead(200);
      postMessage(17);
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
  case 5:
	botResponse = '*lorn';
	break;
  case 6:
	botResponse = 'dude XD';
	break;
  case 7:
	botResponse = 'new is better, nick';
	break;
  case 8:
	botResponse = 'salami allocator';
	break;
  case 9:
	botResponse = 'OwO';
	break;
  case 10:
	botResponse = 'what\'s this?';
	break;
  case 11:
	botResponse = 'ｗｈｏ ｔｆ ｕｐ??? ｓｍａｓｈ ｔｈａｔ ｍｆ\'ｉｎ ｌｉｋｅ ｎｉｇｇａ';
	break;
  case 12:
	botResponse = chasePastas[Math.floor(Math.random() * chasePastas.length)];
	break;
  case 13:
	botResponse = 'layluh*';
	break;
  case 14:
	botResponse = nikkPastas[Math.floor(Math.random() * nikkPastas.length)];;
	break;
  case 15:
	botResponse = 'https://i.redd.it/qr97nfztrkjx.gif';
	break;
  case 16:
	botResponse = squareRoot;
	break;
  case 17:
	botResponse = 'No Snake, The Nanomachines are functioning fine. It must be pycometric interferance from pycomantis!'
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
