// var PENDING = 0;
// var FULFILLED = 1;
// var REJECTED = 2;

// function myPromise(fn) {
//   // store state which can be PENDING, FULFILLED or REJECTED
//   var state = PENDING;

//   // store value once FULFILLED or REJECTED
//   var value = null;

//   // store sucess & failure handlers
//   var handlers = [];

//   function getThen(value) {
//     var t = typeof value;
//     if (value && (t === 'object' || t === 'function')) {
//       var then = value.then;
//       if (typeof then === 'function') {
//         return then;
//       }
//     }
//     return null;
//   }
  
//   /**
//    * Take a potentially misbehaving resolver function and make sure
//    * onFulfilled and onRejected are only called once.
//    *
//    * Makes no guarantees about asynchrony.
//    *
//    * @param {Function} fn A resolver function that may not be trusted
//    * @param {Function} onFulfilled
//    * @param {Function} onRejected
//    */
//   function doResolve(fn, onFulfilled, onRejected) {
//     var done = false;
//     try {
//       fn(function (value) {
//         if (done) return
//         done = true
//         onFulfilled(value)
//       }, function (reason) {
//         if (done) return
//         done = true
//         onRejected(reason)
//       })
//     } catch (ex) {
//       if (done) return
//       done = true
//       onRejected(ex)
//     }
//   }

//   function fulfill(result) {
//     state = FULFILLED;
//     value = result;
//     handlers.forEach(handle);
//     handlers = null;
//   }

//   function reject(error) {
//     state = REJECTED;
//     value = error;
//     handlers.forEach(handle);
//     handlers = null;
//   }

//   function resolve(result) {
//     try {
//       var then = getThen(result);
//       if (then) {
//         doResolve(then.bind(result), resolve, reject);
//         return;
//       }
//       fulfill(result);
//     } catch (e) {
//       reject(e);
//     }
//   }

//   function handle(handler) {
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

//   this.done = function (onFulfilled, onRejected) {
//     // ensure we are always asynchronous
//     setTimeout(function () {
//       handle({
//         onFulfilled: onFulfilled,
//         onRejected: onRejected,
//       });
//     }, 0);
//   };

//   doResolve(fn, resolve, reject);

//   this.then = function (onFulfilled, onRejected) {
//     var self = this;
//     return new myPromise(function (resolve, reject) {
//       return self.done(
//         function (result) {
//           if (typeof onFulfilled === "function") {
//             try {
//               return resolve(onFulfilled(result));
//             } catch (ex) {
//               return reject(ex);
//             }
//           } else {
//             return resolve(result);
//           }
//         },
//         function (error) {
//           if (typeof onRejected === "function") {
//             try {
//               return resolve(onRejected(error));
//             } catch (ex) {
//               return reject(ex);
//             }
//           } else {
//             return reject(error);
//           }
//         }
//       );
//     });
//   };
// }
// exports.myPromise = myPromise;

/**
 * @description promise构造函数，接收要处理的异步操作
 * @param { fn } 需要处理的异步逻辑函数
 */
// 构造Promise需要的状态机的枚举用户后续的状态切换，pendding，fullfilled，rejected
var PENDDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
function MyPromise(fn) {
  // 初始化promise的value，以及状态
  var state = PENDDING;
  var value = null;
  var handlers = []; // 用于存储处理resolve以及reject的控制方法

  // 定义成功状态的处理函数
  function fullfill(result) {
    state = FULFILLED;
    value = result;
  }

  // 定义失败状态的处理函数
  function reject(error) {
    state = REJECTED;
    value = error;
  }

  // 定义resolve，当异步操作执行成功时候的回调
  function resolve(result) {
    try {
      fullfill(result);
    } catch (err) {
      reject(err);
    }
  }

  // 定义解析器执行resovle操作函数的解析器
  function doResolve(fn, onFulfilled, onRejected) {
    try {
      fn(
        (value) => {
          onFulfilled(value);
        },
        (reason) => {
          onRejected(reason);
        }
      );
    } catch (err) {
      onRejected(err);
    }
  }

  // 实际调用执行resolve和reject的控制方法
  function handle(handler) {
    console.log("控制器进入", handler, state);
    if (state === FULFILLED && typeof handler.onFulfilled === "function") {
      handler.onFulfilled(value);
    }
    if (state === REJECTED && typeof handler.onRejected === "function") {
      handler.onRejected(value);
    }
  }

  // 实例化promise时解析resolve,reject,切换状态机状态的入口
  doResolve(fn, resolve, reject);

  this.done = (onFulfilled, onRejected) => {
    // 确保状态机的状态从pendding转换为fulfilled或者rejected之后才会执行then里面的回调,也就是说需要异步操作的结果完成之后才能执行结果处理的相应handle
    // setTimeout(() => {
      handle({
        onFulfilled,
        onRejected,
      });
    // }, 0);
  };

  // promise的.then方法内部其实就是需要再次返回一个Promise，然后将then里面对应成功和失败的resolve,reject的处理方法传入。在这里接收总体promise经过状态机转换后得到的结果值和错误信息
  this.then = (onFulfilled, onRejected) => {
    return new MyPromise((resolve, reject) => {
      console.log('resoveddfdsfsfds', resolve);
      return this.done(
        (result) => {
          if (typeof onFulfilled === "function") {
            try {
              return resolve(onFulfilled(result));
            } catch (err) {
              return reject(onRejected(err));
            }
          } else {
            return resolve(result);
          }
        },
        (error) => {
          if (typeof onRejected === "function") {
            try {
              return resolve(onRejected(error));
            } catch (error) {
              return reject(onRejected(error));
            }
          } else {
            return reject(error);
          }
        }
      );
    });
  };
}

exports.myPromise = MyPromise;


