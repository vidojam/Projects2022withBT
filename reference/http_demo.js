const http = require('http');

//Create a SIMPLE web server object
http
    .createServer((req, res) => {
        // Write response
        res.write('Hello World');
        res.end();
    })
    // Must listen on a port
    .listen(5000, () => console.log('Server running...'));

    // result...
    // $ node http_demo
    // Server running...
    // then go to browser localhost:5000 to see Hello World
