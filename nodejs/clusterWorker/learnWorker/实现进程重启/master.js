const childProcess = require("child_process");
const net = require("net");

const cpuNum = require("os").cpus().length;

let workers = [];

for (let i = 0; i < cpuNum; i++) {
  workers.push(childProcess.fork("./worker.js"));
  console.log(`start process-${workers[i].pid}`);
}

const tcpServer = net.createServer();

tcpServer.listen(8989, () => {
  console.log("Tcp Server: 127.0.0.1:8989");

  // 监听端口后将服务器句柄发送给woker进程
  for (let i = 0; i < workers.length; i++) {
    workers[i].send("tcpServer", tcpServer);
    let curWorker = workers[i];
    workers[i].on("exit", () => {
      console.log(`worker-${curWorker.pid} exit`);
      curWorker = childProcess.fork("./worker.js");
      console.log(`Create Worker-${curWorker.pid}`);
      curWorker.send('tcpServer', tcpServer);
    });
  }
  // 不能关闭master线程，否则的话句柄为空，无法正常传递
  // tcpServer.close()
});
