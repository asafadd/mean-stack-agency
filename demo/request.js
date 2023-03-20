const http = require('http');
const data = JSON.stringify(
{
    title : "MEAN Stack"
});

const options = 
{
    hostname : 'localhost',
    port: 3000,
    path: '/',
    method: 'DELETE', // GET, POST, PUT, DELETE
    headers:
    {
        'content-type': 'application/json',
        'conent-length': data.length
    }
}

const request = http.request(options, response => {
    response.on('data', chunk => {
        process.stdout.write(chunk);
    });
});

request.on('error', error => {
    console.error(error);
})

request.end();