let fs = require('fs');

let renderHTML = function (route, response) {
    fs.readFile(route, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.writeHead('File not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

exports.alive = true;
exports.prod = true;
exports.renderHTML = renderHTML; 