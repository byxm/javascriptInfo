/* Promise的错误捕捉 */

// const p = new Promise((resolve, reject) => {
//     resolve('success');
// })

// p.then((data) => {
//     console.log(data);
//     return Promise.reject('oh, no!');
// }).catch(value => {
//     console.log('error1', value);
//     return Promise.reject('the next error show time');
// }).then((data) => {
//     console.log('value1',data);
// }, (data) => {
//     console.log('value2',data);
// })

const promise1 = () => {
  return new Promise((resolve, reject) => {
    resolve("这是正常执行的1");
    console.log("打印1");
  });
};

const promise2 = () =>
  new Promise((resolve, reject) => {
    throw new Error("这是报了异常的2");
  });

const promise3 = () =>
  new Promise((resolve, reject) => {
    resolve("这是正常执行的3");
    console.log("打印3");
  });

const promise4 = () =>
  new Promise((resolve, reject) => {
    reject("这是捕获了错误的4");
  });

const execFunc = async () => {
  const res = await Promise.all([
    promise1(),
    promise2().catch((err) => err),
    promise3(),
    promise4().catch((err) => err),
  ]);
  console.log("异步的返回结果", res);
};

execFunc();
