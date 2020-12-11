const Koa = require("koa");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = new Koa();

// process.on('uncaughtException',() => {
//     console.log('未知的捕获错误');
// })

// function asyncReadFile(path, callback) {
//    new Promise((resolve, reject) => {
//        resolve('这是异步操作')
//    }).then(res => {
//        callback(res)
//    })
// }



app.use((ctx) => {
  fs.readFile(path.join(__dirname, "./README.md"), (err, data) => {
    console.log("fileData", data.toString());
    throw new Error("err");
  });
  exec('ls', () => {
      console.log('执行完成');
  })
//   asyncReadFile('./file', (res) => {
//       throw new Error('这是未捕获的异常')
//     //   console.log('返回的异步结果', res);
//   })
  ctx.body = "this is test Koa";
});

app.listen(3000, () => {
  console.log("your server is listening on port 3000");
});
