/**
 Todo: Complete this lab 

 - Explore node `http` module
 - Create an http server on the port 3000
 - Create a handler of 
    - '/' req that serves to the client the following:
        A text: Hello, this is http node module 
        And a link: <a href="/">Dashbaoard -></a> 
    - '/dashboard' that serves to the client the following: 
        <h1>Dashbaoard</h1>
        <main>Basic routing using node http server</main>
        <a href="/">back home</a>
 
 */

const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/": {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("Hello, this is http node module");
      res.end('<a href="/dashboard">Dashbaoard -></a>');
      break;
    }
    case "/dashboard": {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Dashboard</h1>");
      res.write("<main>Basic routing using node http server</main>");
      res.end('<a href="/">back home</a>');
      break;
    }
    default: {
      res.writeHead(404, "Not Found");
      res.end("404");
    }
  }
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
