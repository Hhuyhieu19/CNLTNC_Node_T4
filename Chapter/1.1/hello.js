var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello, world');
}).listen(8000);

console.log("Server chay tren http://127.0.0.1:8000 hoac http://localhost:8000");
