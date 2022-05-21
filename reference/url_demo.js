const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//http://mywebsite.com/hello.html?id=100&status=active

// Host (root domain) and this shows the port
console.log(myUrl.host);
//mywebsite.com

// Hostname (doesn't include the port)
console.log(myUrl.hostname);

// Pathname
console.log (myUrl.pathname);
// - /hello.html

// Serialized query
console.log(myUrl.search);
//?id=100&status=active

// Params object (create an object)
console.log(myUrl.searchParams);
//result...
//URLSearchParams { 'id' => '100', 'status' => 'active' } 

// Add param (dynamically)
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' } 

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
//$node url_demo
//id: 100
//status: Active
//abc: 123

 


