/**
 Todo: follow the todos in file to complete the lab
 - 
 */

const EventEmitter = require("events");

// Todo use EventEmitter
//

const emitter = new EventEmitter();

// Todo: write listener 1 that logs the following, `data` and `token` are emitted

emitter.on("data", ({ data, token }) => {
  console.log(
    `Recieved payload ${JSON.stringify(data, null, 2)} with token: ${token}`
  );
});

// Todo: write listener 2 that logs the following
emitter.on("data", (event) => {
  console.log("A second listener as well");
});

setInterval(() => {
  // Todo: write an emitter based listener 1
  //
  emitter.emit("data", { data: "test", token: "tokenTest" });
}, 2000);
