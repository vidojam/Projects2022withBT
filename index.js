const http = require('http');
const path = require('path');
const fs = require('fs');
 
const server = http.createServer((req, res) => {
    
    // if (req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //         }
    //     );
    // }

    // if (req.url === '/api/users') {
        
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }


    // Build file path
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? 'index.html' : req.url
        );

    // console.log(filePath)    
    // res.end();

    // To get extension of the file
    let extname = path.extname(filePath);
    
    // Initila content type
    let contentType = 'text/html';

    // Check extension and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript '
            break;
        case '.css':
            contentType = 'text/css '
            break;
        case '.json':
            contentType = 'application/json '
            break;
        case '.png':
            contentType = 'image.png '
            break;
        case '.jpg':
            contentType = 'image.jpg '
            break;
    }
        // Check if contentType is text/html but no .html file extension
        if (contentType == "text/html" && extname == "") filePath += ".html";
        // log the filePath
        console.log(filePath);
    

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8')
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');

        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//result at localhost/api/users...
// [{"name":"Bob Smith", "age",:40}, {"name":"John Doe", "age":30}]




// const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     })
    // };
//});

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//result...
// $ node index
// Server running on port 5000
//In localhost:5000 - Home





// const server = http.createServer((req, res) => {
//     console.log(req.url);
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//result...
// $ node index
// Server running on port 5000
// /





// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data));

// logger.log('Hello World');

// // result...
// // $ node index
// // Called Listener { id: 'c774eb0d-e9ce-4da8-a496-dd8bb97e98ac', msg: 'Hello World' } 
  
// logger.log ('Hi');
// logger.log('Hello');

// //Result...
// // $ node index
// // Called Listener { id: '999ac356-6741-4a2c-b28f-2314651551b6', msg: 'Hi' }
// // Called Listener { id: 'eb0e3907-6958-4ff7-978e-cae67bcb2c53', msg: 'Hello' }   