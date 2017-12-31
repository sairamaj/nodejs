var http = require('http')

http.createServer(function (req, resp) {

    resp.writeHead(200, { 'Content-Type': 'text/plain' })
    resp.end('Hello world')
}).listen(8081);

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/plain' })
    resp.end('Hello world from 8082')
}).listen(8082);

var responseProcessor = function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/plain' })
    resp.end('Hello world from 8083')
}

var server = http.createServer(responseProcessor)
server.listen(8083)

console.log('server running at 8081 and 8082 and 8083')

