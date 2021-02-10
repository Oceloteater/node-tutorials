const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const json = { name: 'This is a JSON object' };
        res.end(JSON.stringify(json));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');