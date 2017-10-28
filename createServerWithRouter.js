const http = require('http');

const server = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/echo') {
        let body = [];
        request
            .on('data', chunk => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();
                response.end(body);
            });
    } else {
        response.statusCode = 404;
        response.end();
    }
});

const port = 8080;
const hostName = 'localhost';

server.listen(port, hostName, () => {
    console.log(`Server started at port ${port}`);
});
