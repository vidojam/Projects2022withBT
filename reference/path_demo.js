//included with node
const path = require('path');
const { resourceLimits } = require('worker_threads');


// Gets base file name
console.log(path.dirname(__filename));
// results...
//$ node path_demo
//C:\Users\HP\projects\code_big_bits\reference\path_demo.js

console.log(path.basename(__filename));
//results for just the filename...
//$ node path_demo
//path_demo.js

// for just the directory
console.log(path.dirname(__filename));
//results...
//$ node path_demo
//C:\Users\HP\projects\code_big_bits\reference 

// File extension
//console.log(path.extname(__filename));
console.log(path.extname(__filename));
// results...
//$ node path_demo
//C:\Users\HP\projects\node_crash_course\reference
//.js

//Create object...
//console.log(path.parse(__filename));

//$node path.demo
//  {
//    root: 'C:\\',
//    dir: 'C:\\Users\\HP\\projects\\node_crash_course\\reference',
//    base: 'path_demo.js',
//    ext: '.js',
//    name: 'path_demo'
//  }
  

//to assess any property of the object ie-base 
console.log(path.parse(__filename).base);
//result...
//$ node path_demo
//path_demo.js

//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
//result...
//$ node path_demo
//C:\Users\HP\projects\node_crash_course\reference\test\hello.html