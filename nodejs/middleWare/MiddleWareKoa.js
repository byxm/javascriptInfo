// blog: https://medium.com/netscape/mastering-koa-middleware-f0af6d327a69
// 对应译文：https://hijiangtao.github.io/2017/11/10/Mastering-Koa-Middleware/
const Koa = require('koa')
const app = new Koa()
// // Middleware 1
// app.use(async (ctx, next) => {
//   ctx.status = 200
//   console.log('Setting status')
//   // Call the next middleware, wait for it to complete
//   await next() // 当注释掉Koa这里的调用next，http请求还是会执行完，但是没有任何响应体因为下一个中间件没有执行
// })
// // Middleware 2
// app.use((ctx) => {
//   console.log('Setting body')
//   ctx.body = 'Hello from Koa'
// })




// Simple Promise delay
// function delay (ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms)
//     })
//   }
//   // 中间件级联执行的实现主要是依赖async, await 关键字的实现
//   // https://juejin.im/post/6844903892623294477
//   app.use(async (ctx, next) => {
//     ctx.status = 200
//     console.log('Setting status')
//     next()
//     // console.log(next())
//     // await next();
//     console.log('forget next')
//   })
//   // We don't call `next()` because
// // we don't want anything else to happen.
// app.use(async (ctx, next) => {
//   ctx.status = 200
//   console.log('print simone')
//   await next()
//   // await next()
//   console.log('record simone')
// })

// app.use(async (ctx, next) => {
//   ctx.status = 200
//   console.log('print finished')
//   await next()
//   console.log('record finished')
// })

// app.use((ctx) => {
//   return delay(1000).then(() => {
//     console.log('Setting body')
//     ctx.body = 'Hello from Koa'
//   })
// })


// async function responseTime (ctx, next) {
//   console.log('Started tracking response time')
//   const started = Date.now()
//   await next()
//   // once all middleware below completes, this continues
//   const ellapsed = (Date.now() - started) + 'ms'
//   console.log('Response time is:', ellapsed)
//   ctx.set('X-ResponseTime', ellapsed)
// }
// app.use(responseTime)
// app.use(async (ctx, next) => {
//   ctx.status = 200
//   console.log('Setting status')
//   await next()
// })
// app.use(async (ctx) => {
//   await delay(1000)
//   console.log('Setting body')
//   ctx.body = 'Hello from Koa'
// })



// app.use(async (ctx, next) => {
//   try {
//     await next()
//   } catch (err) {
//     ctx.status = 400
//     ctx.body = `Uh-oh: ${err.message}`
//     console.log('Error handler:', err.message)
//   }
// })
// app.use(async (ctx) => {
//   if (ctx.query.greet !== 'world') {
//     throw new Error('can only greet "world"')
//   }
  
//   console.log('Sending response')
//   ctx.status = 200
//   ctx.body = `Hello ${ctx.query.greet} from Koa`
// })


app.use(async (ctx, next) => {
  console.log(1)
  next(); 
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log(3)
  next(); 
  console.log(4)
})

app.use(async (ctx, next) => {
  console.log(5)
  next(); 
  console.log(6)
})



app.listen(3002, () => console.log('Koa app listening on 3002'))