const request = require("request");
const path = require("path");
const fs = require("fs");

const stream = fs.createWriteStream(path.join(__dirname, "./demo.zip"));
request('http://10.16.25.10:7100/api/levelCenter/download?id=5fc74b93137ffa0280752867', (error, res) => {
    console.log('ijijijij', error);
})
  .pipe(stream)
  .on("close", () => {
    console.log("升级包下载完成");
  })
  .on("error", () => {
    console.log("升级包下载失败");
  });
