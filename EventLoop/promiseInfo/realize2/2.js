

// 为了解决在第一步出现的问题，在这一步对Promise引入相应的状态机制
class myPromise {

    constructor(fn) {
        this.callbackQueue = []
        this.state = 'pending'
        this.value = null;
        fn(this._resolve.bind(this))
    }



    then(onFulfilled) {
        if(this.state === 'pending') {
            this.callbackQueue.push(onFulfilled)
        }else {
            onFulfilled(this.value)
        }
        return this;
    }


    _resolve(value) {
        this.state = 'fulfilled';
        this.value = value;
        this.callbackQueue.forEach(fn => fn(this.value))
    }
}


const promise = new myPromise((resolve) => {
    console.log('同步开始')
    resolve('这是同步的')
})

promise.then(res => {
    console.log('res', res);
}).then(res => {
    console.log('res12', res)
})


/**
 * 这里虽然解决了同步的问题，但是不能实现Promise规范的then链可以将执行返回的结果传递给下一个then函数
 * 
*/










