// Master实现对Worker请求的分发
const childProcess = require("child_process");
const net = require("net");

const cpuNum = require("os").cpus().length;

let workers = [];
let cur = 0;

for (let i = 0; i < cpuNum; i++) {
  workers.push(childProcess.fork("./worker.js"));
  console.log(`worker process-${workers[i].pid}`);
}


const tcpServer = net.createServer();

// 服务收到请求后分发给子进程去处理
tcpServer.on('connection',(socket) => {
    workers[cur].send('socket', socket);
    cur++;
    console.log('主进程分配',cur);
})

tcpServer.listen(8989, () => {
    console.log('Tcp Server:127.0.0.1:8989');
})

