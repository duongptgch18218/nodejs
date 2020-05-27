var http = require('http');
var server = http.createServer((req, res) => {
    if(req.url == '/'){

        res.writeHead(200, {'Content-type': 'text/html'});

        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/second'){
        res.writeHead(200, {'Content-type': 'text/html'});

        res.write('<html><body><p>This is second Page.</p></body></html>');
        res.end();
    }
    else if(req.url == '/third') {
        res.writeHead(200, {'Content-type': 'text/html'});

        res.write('<html><body><p>This is third Page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/json'){
        res.writeHead(200, {'Content-type': 'application/json'});
        let hello = [{
            message: 'hello world',
            name: 'Quoc an an lon',
            age : '20'
        }];
        res.write(JSON.stringify({'hello': hello}));
        res.end();
    }
    else{
        res.end('Invalid request');
    }
});
server.listen(8080);
console.log("server running");
