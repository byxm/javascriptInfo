const fs = require("fs");

setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("rs1");
    setTimeout(() => {
      console.log("timer2");
    });
  });
});
Promise.resolve().then(() => {
  console.log("p1");
});
setTimeout(() => {
  console.log("timer3");
  Promise.resolve().then(() => {
    console.log("rs2");
    setTimeout(() => {
      console.log("timer4");
    });
  });
});
Promise.resolve().then(() => {
  console.log("p2");
});

/**
 * p1, p2, timer1, timer3, rs1, rs2, timer2, timer4
 * 和浏览器事件轮询不一样的地方在于，在timer阶段会执行setTimeout,setInterval
 * 注意这个只针对node10和之前的版本
 */

// 下面的timeOut和Immediate执行顺序可以在前也可以在后，取决于setTimeout的准备时间是多久
// setTimeout(() => {
//   console.log("timeout");
// });

// setImmediate(() => {
//   console.log("immediate");
// });

// fs.readFile("./index.html", () => {
// // 在I/O回调里面setImmediate永远最先执行，因为poll阶段完成之后就到了check阶段
//   setTimeout(() => {
//     console.log("timeout");
//   });

//   setImmediate(() => {
//     console.log("immediate");
//   });
// });




// setTimeout(() => {
//     console.log('timer')
//     Promise.resolve().then(() => {
//         console.log('resolve1');
//     })
// })

// Promise.resolve().then(() => {
//     console.log('pr');
// })

// // process.nextTick是独立于Event Loop之外的优先级高于其他微任务
// process.nextTick(() => {
//     console.log('nextTick');
//     process.nextTick(() => {
//         console.log('nextTick');
//         process.nextTick(() => {
//             console.log('nextTick');
//         })
//     })
// })




