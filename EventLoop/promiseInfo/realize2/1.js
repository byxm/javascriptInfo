class myPromise {
  constructor(fn) {
    this.callbackQueue = []; // then回调链需要保存的操作 
    fn(this._resolve.bind(this))
  }


  // 订阅then事件
  then(onFulfilled) {
    this.callbackQueue.push(onFulfilled)
    return this;
  }
  

  // 发布resolve之后的操作
  _resolve(value) {
    this.callbackQueue.forEach(fn => fn(value))
  } 
}



let p = new myPromise((resolve) => {
  setTimeout(() => {
  // console.log("同步输出");
  resolve("2s后输出结果");
  }, 1000)
});

p.then((res) => {
  console.log(res);
  return 'resUndefined'
}).then((res) => {
  console.log("res", res);
});


/**
 * 首先能想到并要解决的问题是：怎么能够让Promise内部包装的异步操作能够通过.then回调链里面拿到这个结果 
 * 其实就是通过发布订阅来实现。首先在调用Promise构造函数的时候传入包装有异步操作的一个回调函数，这个回调函数有两个参数 
 * resolve异步操作执行成功，reject异步操作执行失败。当Promise构造函数链式调用then方法以后，就将resolve成功的回调函数放到内部的回调队列里面
 * 进行注册。当调用resolve之后就发布相应的事件，then链回调队列里面的事件就逐次执行
 * 但是以上的实现是要基于Promise里面执行resolve的操作是异步的，才能在发布回调的操作之前之前先注册then链里面的回调操作
*/







