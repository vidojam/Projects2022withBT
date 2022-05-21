const fs = require('fs');
const path = require('path');

//Create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//    if (err) throw err;
//    console.log('Folder created...');
//});

// Create and write a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', 
// err =>{
//     if (err) throw err;
//     console.log('File written to...');

//     //File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', 
//     err =>{
//     if (err) throw err;
//     console.log('File written to...');
//   }
// );
//   }
// );

// result of writeFile...
//$ node fs_demo
//File written to...


//Read file...
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
//     if (err) throw err;
//     console.log(data);
// });

//result...
//$ node fs_demo
//Hello World! I love Node.js


//Rename file...
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed...');
});

// result...file renamed to helloworld.txt and hello.txt deleted.
// $ node fs_demo
// File renamed...