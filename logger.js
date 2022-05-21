const EventEmitter = require('events')
const uuid = require('uuid');
const { resourceLimits } = require('worker_threads');

//Example id generation - console.log(uuid.v4());
//result is a unique id
//$ node logger
//86cfa48a-5fab-431a-a508-0124b1989c12

class Logger extends EventEmitter {
    log(msg) {
      // Call event
      this.emit('message', { id: uuid.v4(), msg });  
    }
}

module.exports = Logger;