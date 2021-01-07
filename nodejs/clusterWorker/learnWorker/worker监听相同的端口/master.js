const childProcess = require('child_process')
const net = require('net')
const cpuNums = require('os').cpus().length;


const workers = []

for(let i = 0; i < cpuNums; i++) {
    workers.push(childProcess.fork('./worker.js'))
    console.log(`worker process-${workers[i].pid}`);
}

const tcpServer = net.createServer();

tcpServer.listen(8989, () => {
    console.log('tcpServer 127.0.0.1:8989');
    // 将监听8989的tcp连接实例发送到各个子进程
    for(let i = 0; i < workers.length; i++) {
        workers[i].send('tcpServer', tcpServer)
    }
    // 关闭tcp连接
    // tcpServer.close();
})
