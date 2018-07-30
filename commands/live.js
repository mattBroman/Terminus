Globals = require('./../globals.js');
exports.regex = /!revive/
exports.message = () => { Globals.alive = true;
return 'Kept you waiting huh?'; }