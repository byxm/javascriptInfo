const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  const stream = fs.createReadStream("./file/big.file");
  stream.pipe(res);
});

server.listen("8000");
console.log("your application start at 8000");
