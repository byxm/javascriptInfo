// blog: https://medium.com/netscape/mastering-koa-middleware-f0af6d327a69


const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200)
  console.log('Setting status')
  // Call the next middleware
  next() // 如果注释掉这里，请求将永远不会结束，express需要调用next(),或者发送响应体才会结束请求
})

app.use((req, res) => {
  console.log('Setting body')
  res.send(`Hello from Express`)
})

app.listen(3001, () => console.log('Express app listening on 3001'))