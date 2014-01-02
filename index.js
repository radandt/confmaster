var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url.substr(-3) === '.js') {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
    } else if (req.url.substr(-4) === '.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
    } else if (req.url.substr(-5) === '.json') {
        res.writeHead(200, {'Content-Type': 'application/json'});        
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
    }

    var filename = 'confmaster/' + (req.url === '/' ? 'index.html' : req.url);
    //console.log(filename);

    fs.readFile(filename, function (err, data) {
        res.end(data);
    });
}).listen(8008);

console.log('run server at port 8008');