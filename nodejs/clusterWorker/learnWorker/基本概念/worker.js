// demo1
// console.log('Worker-' + process.pid + ': Hello world.');



// demo2
// 接收主进程发来的消息
process.on('message', (msg) => {
    console.log(`Receive message from main worker:${msg}`);
    process.send('hi master');
})