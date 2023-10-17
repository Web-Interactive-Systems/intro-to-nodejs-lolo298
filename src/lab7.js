/**
 Todo: follow the todos in file to complete the lab
 - 
 */

const EventEmitter = require("events");

// Todo use EventEmitter
//

// Todo: write listener 1 that logs the following, `data` and `token` are emitted
console.log(
  `Recieved payload ${JSON.stringify(data, null, 2)} with token: ${token}`
);

// Todo: write listener 2 that logs the following
console.log("A second listener as well");

setInterval(() => {
  // Todo: write an emitter based listener 1
  //
}, 2000);
