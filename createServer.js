const http = require('http');

const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write('<html><body>Hello World</body></html>');
    response.end();

    // response.end('<html><body>Hello World</body></html>');
});

const port = 8080;
const hostName = 'localhost';

server.listen(port, hostName, () => {
    console.log(`Server started at port ${port}`);
});
