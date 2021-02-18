// 第一版函数柯里化的实现方式

const curry = function(fn) {
    // 暂存第一次传递进来的参数
    const arg = Array.prototype.slice.call(arguments, 1);
    return function() {
        const args = arg.concat(Array.prototype.slice.call(arguments));
        console.log('argsssss', args);
        return fn.apply(this,args)
    }
}

const add = (x, y) => {
    return x + y
}

const addCurrey = curry(add, 3)

console.log('sum', addCurrey(2))




// const curry = (fn) => {
//   const res = (...args) => {
//     if (args.length === fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return (...restArgs) => res(...args, ...restArgs);
//     }
//   };
//   return res;
// };

// const foo = curry((a, b, c, d) => {
//   console.log(a, b, c, d);
// });

// foo(1)(2)(3)(4)(5);
