// const axios = require("axios");
const { myPromise } = require("./customPromise.js");
// const myPromise = require('promise');

setTimeout(() => {
  console.log('testMacroTask');
})

function testAsyc() {
  return new myPromise((resolve, reject) => {
    //  axios.get("http://localhost:7001/").then(res => {
    //    resolve(res.data);
    //  })
    // setTimeout(() => {
    //   resolve("我是测试异步的");
    // }, 0);
    resolve('testmicroTask');
  });
}

testAsyc().then(res => {
  console.log('then finished', res)
})

console.log('I am sychronus code');

// (async function () {
//   console.log(123123);
//   const res = await testAsyc();
//   console.log("async调用返回结果", res);
//   return res;
// })();
// testAsyc().then((res) => {
//   console.log("export result", res.data);
//   return res.data;
// }).then((res)=> {
//   return new myPromise((resolve, reject) => {
//      axios.get("http://localhost:7001/").then(res => {
//        resolve(res.status);
//      })
//   }) 
 
// }).then(rs => {
//   console.log('rsssssss', rs);
// });



// setTimeout(() => {
//   console.log('macro task');
// }, 0)

// new Promise((resolve, rej) => {
// axios.get("http://localhost:7001/").then(res => {
//        resolve(res.data);
//      })

// }).then(res => {
//   console.log('res',res);
// })
// Promise.resolve('micro task').then((res) => {
// axios.get("http://localhost:7001/").then(res => {
//        resolve(res.data);
//      })
//   console.log(res);
// })


// async function testAsync() {

//   console.log('testAsynchahaha');
// }

// testAsync();

// console.log('sychronussssss', testAsync());