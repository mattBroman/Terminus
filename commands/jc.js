let jc = [
    'I know your UNATCO killphrase: Laputan Machine.',
    'You mechs may have copper wiring to reroute your fear of pain, but I\'ve got nerves of steel.',
    'You came all the way to Paris to tell me that?',
    'I like to make a silent take down, give me the GEP gun',
    'I heard you can get me inside'
];

res = function() {
    return jc[Math.floor(Math.random() * jc.length)];
}

regex = /\.*@jc\.*/i;

exports.regex = regex;
exports.message = res;