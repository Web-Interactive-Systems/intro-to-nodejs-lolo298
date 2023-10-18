const { writeFileSync } = require("fs");
const http = require("http");
const fs = require("fs");
/**
 Todo: Follow the todos in this file to complete it
 */

// Todo run this code only once to generate a big file
// --
// Generate a big file using `writeFileSync`
// Array.from({ length: 100000 }, (_, i) => {
//   writeFileSync("./src/utils/big.txt", `This will be a big text file ${i}\n`, {
//     flag: "a",
//   }); // flag: "a" for appending
// });

// Todo create an http server

// const server = http.createServer((req, res) => {
//   const data = fs.readFileSync("./src/utils/big.txt", "utf-8");
//   res.end(data);
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`server listening on port ${PORT}`);
// });

// Todo: serve text to the client.

// Todo: What's the problem?
// The file need to be fully loaded before it can be served to the client.
// For big files this can be extremely slow.

// Todo: use `createReadStream` to file stream to serve text to the client.

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./src/utils/big.txt", "utf-8");
  stream.on("open", () => {
    stream.pipe(res);
  });
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
