
// demo1
// const childProcess = require('child_process')
// const cpuNums = require('os').cpus().length;



// for(let i = 0; i < cpuNums; i++) { // 根据CPU核数来创建多个线程
//     childProcess.fork('./worker.js');
// }

// console.log('Master: xxxxxx');





// demo2
const childProcess = require('child_process')
const worker = childProcess.fork('./worker.js')


// 主进程向子进程发送消息
worker.send('hello childProcess')

// 主进程接受子进程的消息
worker.on('message',(msg) => {
    console.log(`Recived message from worker ${msg}`)
})



