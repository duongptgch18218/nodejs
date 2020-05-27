var http = require('http');
let fs = require('fs');
var server = http.createServer((req, res) => {
    if(req.url == '/login'){
        fs.readFile("./templates/login.html", null, (err, data) => {
            if (err){
                res.writeHead(404);
                res.write("Opoos, file not found");
                res.end();
            }
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url == '/student'){
        fs.readFile('./templates/index.html', null, (err, data) => {
            if (err){
                res.writeHead(404);
                res.write("Opoos, file not found");
                res.end();
            }
            res.writeHead(200, {'Content-type':'text/html'});
            res.write(data);
            res.end();
        });
       
    }
    else if(req.url == '/third') {
        res.writeHead(200, {'Content-type': 'application/json'});

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
server.listen(5000);
console.log("server running");
