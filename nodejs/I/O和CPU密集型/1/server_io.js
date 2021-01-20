const http = require("http");
const fs = require("fs");

const readFile = () => {
  return fs.readFileSync('./vpdn_server_image.tar'); // 同步读取依然会阻塞node的进程
};

const server = http.createServer();

server.on("request", async (req, res) => {
  if (req.url === "/read") {
    console.log("读取文件");
    readFile();
    console.log('读取结束')
    return res.end("文件读取结束");
  } else {
    console.log("不请求文件");
    res.end("resultEnd");
  }
});

server.listen(3000);
