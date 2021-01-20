const http = require('http')


const add = () => {
    let count = 0;
    for(let i = 0; i < 1e10; i++) {
        count = count + i;
    }
    return count;
}


const server = http.createServer();


server.on('request', (req, res) => {
    console.log('请求开始')
    if(req.url === '/add') {
        console.log('计算开始')
        const result = add();
        return res.end(`求和结束 ${result}`);
    }else {
        console.log('请求结束')
        res.end('resultEnd')
    }
})


server.listen(3000)








