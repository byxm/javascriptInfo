var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function myPromise(fn) {
  // store state which can be PENDING, FULFILLED or REJECTED
  var state = PENDING;

  // store value once FULFILLED or REJECTED
  var value = null;

  // store sucess & failure handlers
  var handlers = [];

  function getThen(value) {
    var t = typeof value;
    if (value && (t === 'object' || t === 'function')) {
      var then = value.then;
      if (typeof then === 'function') {
        return then;
      }
    }
    return null;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   *
   * @param {Function} fn A resolver function that may not be trusted
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   */
  function doResolve(fn, onFulfilled, onRejected) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return
        done = true
        onFulfilled(value)
      }, function (reason) {
        if (done) return
        done = true
        onRejected(reason)
      })
    } catch (ex) {
      if (done) return
      done = true
      onRejected(ex)
    }
  }

  function fulfill(result) {
    state = FULFILLED;
    value = result;
    handlers.forEach(handle);
    handlers = null;
  }

  function reject(error) {
    state = REJECTED;
    value = error;
    handlers.forEach(handle);
    handlers = null;
  }

  function resolve(result) {
    try {
      var then = getThen(result);
      if (then) {
        console.log('thenFunccccc', then, result);
        doResolve(then.bind(result), resolve, reject);
        return;
      }
      fulfill(result);
    } catch (e) {
      reject(e);
    }
  }

  function handle(handler) {
    if (state === PENDING) {
      handlers.push(handler);
    } else {
      if (state === FULFILLED && typeof handler.onFulfilled === "function") {
        handler.onFulfilled(value);
      }
      if (state === REJECTED && typeof handler.onRejected === "function") {
        handler.onRejected(value);
      }
    }
  }

  this.done = function (onFulfilled, onRejected) {
    // ensure we are always asynchronous
    setTimeout(function () {
      handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected,
      });
    }, 0);
  };

  doResolve(fn, resolve, reject);

  this.then = function (onFulfilled, onRejected) {
    var self = this;
    return new myPromise(function (resolve, reject) {
      return self.done(
        function (result) {
          if (typeof onFulfilled === "function") {
            try {
              return resolve(onFulfilled(result));
            } catch (ex) {
              return reject(ex);
            }
          } else {
            return resolve(result);
          }
        },
        function (error) {
          if (typeof onRejected === "function") {
            try {
              return resolve(onRejected(error));
            } catch (ex) {
              return reject(ex);
            }
          } else {
            return reject(error);
          }
        }
      );
    });
  };
}
exports.myPromise = myPromise;

/**
 * @description promise构造函数，接收要处理的异步操作
 * @param { fn } 需要处理的异步逻辑函数
 */
// 构造Promise需要的状态机的枚举用户后续的状态切换，pendding，fullfilled，rejected
// var PENDING = 0;
// var FULFILLED = 1;
// var REJECTED = 2;
// function MyPromise(fn) {
//   // 初始化promise的value，以及状态
//   var state = PENDING;
//   var value = null;
//   var handlers = []; // 用于存储处理resolve以及reject的控制方法

//   // 定义成功状态的处理函数
//   function fullfill(result) {
//     state = FULFILLED;
//     value = result;
//     console.log("handlerssssss", handlers);
//     handlers.forEach(handle);
//     handlers = null;
//   }

//   // 定义失败状态的处理函数
//   function reject(error) {
//     state = REJECTED;
//     value = error;
//     handlers.forEach(handle);
//     handlers = null;
//   }

//   // 定义resolve，当异步操作执行成功时候的回调
//   function resolve(result) {
//     try {
//       fullfill(result);
//     } catch (err) {
//       reject(err);
//     }
//   }

//   // 定义解析器执行resovle操作函数的解析器
//   function doResolve(fn, onFulfilled, onRejected) {
//     try {
//       fn(
//         (value) => {
//           onFulfilled(value);
//         },
//         (reason) => {
//           onRejected(reason);
//         }
//       );
//     } catch (err) {
//       onRejected(err);
//     }
//   }

//   // 实际调用执行resolve和reject的控制方法
//   function handle(handler) {
//     // console.log("state handler", state);
//     if (state === PENDING) {
//       handlers.push(handler);
//     } else {
//       if (state === FULFILLED && typeof handler.onFulfilled === "function") {
//         handler.onFulfilled(value);
//       }
//       if (state === REJECTED && typeof handler.onRejected === "function") {
//         handler.onRejected(value);
//       }
//     }
//   }

//   // 实例化promise时解析resolve,reject,切换状态机状态的入口
//   doResolve(fn, resolve, reject);

//   this.done = (onFulfilled, onRejected) => {
//     // 确保状态机的状态从pendding转换为fulfilled或者rejected之后才会执行then里面的回调,也就是说需要异步操作的结果完成之后才能执行结果处理的相应handle
//     setTimeout(() => {
//       handle({
//         onFulfilled,
//         onRejected,
//       });
//     }, 0);
//   };

//   // promise的.then方法内部其实就是需要再次返回一个Promise，然后将then里面对应成功和失败的resolve,reject的处理方法传入。在这里接收总体promise经过状态机转换后得到的结果值和错误信息
//   this.then = (onFulfilled, onRejected) => {
//     return new MyPromise((resolve, reject) => {
//       return this.done(
//         (result) => {
//           if (typeof onFulfilled === "function") {
//             // console.log('onFulfilled', onFulfilled);
//             try {
//               // return resolve(onFulfilled(result));
//               return onFulfilled(result);
//             } catch (err) {
//               // return reject(onRejected(err));
//               return onRejected(err);
//             }
//           } else {
//             return resolve(result);
//           }
//         },
//         (error) => {
//           if (typeof onRejected === "function") {
//             try {
//               return resolve(onRejected(error));
//             } catch (error) {
//               return reject(onRejected(error));
//             }
//           } else {
//             return reject(error);
//           }
//         }
//       );
//     });
//   };
// }










// function MyPromise(fn) {
//   this.PENDING = 0;
//   this.FULFILLED = 1;
//   this.REJECTED = 2;
//   this.handlers = [];

//   this.state = this.PENDING;
//   this.value = null;

//   const handler = (handle) => {
//     if (this.state === this.PENDING) {
//       this.handlers.push(handle);
//     } else {
//       if (
//         this.state === this.FULFILLED &&
//         typeof handle.onFulfilled === "function"
//       ) {
//         handle.onFulfilled(this.value);
//       }
//       if (
//         this.state === this.REJECTED &&
//         typeof handle.onRejected === "function"
//       ) {
//         handle.onRejected(this.value);
//       }
//     }
//   };

//   const fulfilled = (result) => {
//     this.state = this.FULFILLED;
//     this.value = result;
//     this.handlers.forEach(handler);
//     this.handlers = null;
//   };

//   const rejected = (error) => {
//     this.state = this.REJECTED;
//     this.value = error;
//     this.handlers.forEach(handler);
//     this.handlers = null;
//   };

//   /**
//    * 检查value值是不是Promise，如果是的话返回这个promise的.then方法
//    *
//    */
//   const getThen = (value) => {
//     const t = typeof value;
//     if (t && (t === "object" || t === "function")) {
//       const then = value.then;
//       if (typeof then === "function") {
//         console.log('functionThen', then);
//         return then;
//       }
//     }
//     return null;
//   };

//   const doResolve = (fn, onFulfilled, onRejected) => {
//     try {
//       fn(
//         (result) => {
//           try {
//             onFulfilled(result);
//           } catch (error) {
//             onRejected(error);
//           }
//         },
//         (error) => {
//           onRejected(error);
//         }
//       );
//     } catch (error) {
//       onRejected(error);
//     }
//   };

//   const resolve = (result) => {
//     try {
//       const then = getThen(result);
//       if (then) {
//         doResolve(then, resolve, rejected);
//         return;
//       }
//       fulfilled(result);
//     } catch (error) {
//       rejected(error);
//     }
//   };

//   doResolve(fn, resolve, rejected);

//   this.done = (onFulfilled, onRejected) => {
//     // 确保promise内部的操作都是异步
//     setTimeout(() => {
//       handler({ onFulfilled, onRejected });
//     }, 0);
//   };

//   this.then = (onFulfilled, onRejected) => {
//     return new MyPromise((resolve, reject) => {
//       return this.done(
//         (value) => {
//           if (typeof onFulfilled === "function") {
//             // 这里使用这么多的回调是为了在结果处理的回调里面能够拿到异步操作的结果值
//             try {
//               return resolve(onFulfilled(value));
//             } catch (error) {
//               return reject(error);
//             }
//           } else {
//             return resolve(value);
//           }
//         },
//         (error) => {
//           if (typeof onRejected === "function") {
//             try {
//               return resolve(onRejected(error));
//             } catch (error) {
//               return reject(error);
//             }
//           } else {
//             return reject(error);
//           }
//         }
//       );
//     });
//   };
// }

// exports.myPromise = MyPromise;
