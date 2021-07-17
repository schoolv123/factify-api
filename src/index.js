const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });

  res.end("hello sourav \n");
});

server.listen(port, () => {
  console.log(`Server is running at localhost:${port}/`);
});
