const cluster = require('cluster')
const net = require('net')

if(cluster.isMaster) {
    const cpuNums = require('os').cpus().length
    for(let i = 0; i < cpuNums; i++) {
        cluster.fork();
    }

    // 创建进程后输出信息
    cluster.on('online',(worker) => {
        console.log(`Create worker-${worker.process.pid}`)
    })

    // 监听子进程退出后重启事件
    cluster.on('exit', (worker, code, signal) => {
        console.log(`[Master] worker ${worker.process.pid} died with code ${code} and ${signal}`)
        cluster.fork();
    })

} else {
    net.createServer().on('connection', (socket) => {
        setTimeout(() => {
            socket.end(`Request handled by worker-${process.pid}`)
        }, 10)
    }).listen(8989) 
}















