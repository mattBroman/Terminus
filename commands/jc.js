let jc = [
    'I know your UNATCO killphrase: Laputan Machine.',
    'You mechs may have copper wiring to reroute your fear of pain, but I\'ve got nerves of steel.',
    'You came all the way to Paris to tell me that?',
    'I like to make a silent take down, give me the GEP gun',
    'I heard you can get me inside',
    'You\'re gonna burn alright',
    'I have to drop something. Heh-Heh. Hold on.',
    'Except send you back to the people... In a body bag!',
    'I\'m woth UNATCO, start talking',
    'Lets\'s try some word-association. First word: Ambrosia.',
    'What a same.',
    'VersaLife. Good, we\'re getting closer. You might as well tell me the rest. If I\'m gonna kill you, you\'re already dead.',
    'Maybe you should try getting a job.',
    'I\'m not much into books.',
    'Sticks and stones.',
    'That makes me one ugly son-of-a-bitch. How\'d my face get all marked-up with buielectrics?',
    'Does that mean I don\' get the job'
];

res = function() {
    return jc[Math.floor(Math.random() * jc.length)];
}

regex = /\.*@jc\.*/i;

exports.regex = regex;
exports.message = res;