const os = require('os');

//Platform
console.log(os.platform());
//result...
//$ node os_demo
//win32


// CPU Arch
console.log(os.arch());
//result...
// $ node os_demo
// x64


// CPU Core Info gives an object
console.log(os.cpus());
//results...
// [
//     {
//       model: 'AMD E1-2500 APU with Radeon(TM) HD Graphics    ',
//       speed: 1397,
//       times: {
//         user: 2933187,
//         nice: 0,
//         sys: 2123265,
//         idle: 8045125,
//         irq: 144359
//       }
//     },
//     {
//       model: 'AMD E1-2500 APU with Radeon(TM) HD Graphics    ',
//       speed: 1397,
//       times: { user: 3051671, nice: 0, sys: 1780531, idle: 8268750, irq: 28578 }     
//     }
//   ]


// Free memory
console.log(os.freemem());
//$ node os_demo
//4098637824


// Total memory
console.log(os.totalmem());
//$ node os_demo
//7983202304

//Home dir
console.log(os.homedir());
//$ node os_demo
//C:\Users\HP


//Uptime
console.log(os.uptime());
//$ node os_demo
//112750... in number of seconds
