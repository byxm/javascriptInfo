const axios = require("axios");
const { myPromise } = require("./custompromise.js");
async function testAsyc() {
  return new myPromise((resolve, reject) => {
    //  axios.get("http://localhost:7001/").then(res => {
    //    resolve();
    //  })
    setTimeout(() => {
      resolve("我是测试异步的");
    }, 0);
  });
}

// (async function () {
//   console.log(123123);
//   const res = await testAsyc();
//   console.log("async调用返回结果", res);
//   return res;
// })();
testAsyc().then((res) => {
  console.log("export result", res);
});
console.log("我是同步");
