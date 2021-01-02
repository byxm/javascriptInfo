// Promise then链的调用的真正实现

class myPromise {
  constructor(fn) {
    this.callbackQueue = [];
    this.state = "pending";
    this.value = null;
    fn(this._resolve.bind(this));
  }

  // 内部需要返回一个新的Promise实例
  then(onFulfilled) {
    return new myPromise((resolve) => {
      this.handle({ onFulfilled: onFulfilled || null, resolve });
    });
  }

  handle(callback) {
      if(this.state === 'pending') {
          this.callbackQueue.push(callback);
          return
      }
      if(!callback.onFulfilled) {
        callback.resolve();
        return;
      }
      const ret = callback.onFulfilled(this.value)
      callback.resolve(ret) // 不能理解
  }

  _resolve(value) {
      this.state = 'fulfilled';
      this.value = value;
      this.callbackQueue.forEach(fn => this.handle(fn))
  }
}

const _promise = new myPromise((resolve) => {
  console.log('promise1')
  resolve('promiseOne')
  // setTimeout(() => {
  //   resolve('2s的异步操作')
  // }, 2000)
})


_promise.then((res) => {
  console.log('res1', res)
  return 'return res1'
}).then((res) => {
  console.log('res2', res)
})

console.log('end')