const http = require('http');
const server = http.createServer((requset, response) => {
    response.writeHead(200,{"conten-type": "text/html"});
    if (requset.method == 'GET')
    {
        response.end('GET')
    }
    if (requset.method == 'POST')
    {
        response.end('POST')
    }
    if (requset.method == 'PUT')
    {
        response.end('PUT')
    }
    if (requset.method == 'DELETE')
    {
        response.end('DELETE')
    }
})

server.listen(3000, () => console.log("http://localhost:3000"))