let express = require('express');
let bot = require('./bot.js');
let fs = require('fs')
let app = express();
let bodyParser = require('body-parser')
let htmlPath = 'html/'

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

app.use(bodyParser());
app.get('/', (req, res) => renderHTML(htmlPath + 'index.html', res));
app.post('/res', (req, res) => { 
    bot.localMessage(req.body.meme);
    renderHTML(htmlPath +'index.html', res);
});

app.listen(3000, () => console.log('listening on port 3000'));