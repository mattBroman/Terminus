Globals = require('./../globals.js');
Bot = require('./../bot.js')
exports.regex = /!die/
exports.message = () => { 
    let mes = 'How you gonna have a groupme with no Termius, people will lose interest in the chat!. Shit, I\'m dead.';
    console.log(Globals.prod)
    Globals.prod ? Bot.postMessage(mes) : Bot.testMessage(mes);
    Globals.alive = false;
    return 'dead';
 }