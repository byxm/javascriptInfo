// function sub_curry(fn) {
//     var args = [].slice.call(arguments, 1);
//     return function() {
//         return fn.apply(this, args.concat([].slice.call(arguments)));
//     };
// }

// function curry(fn, length) {

//     length = length || fn.length;

//     var slice = Array.prototype.slice;

//     return function() {
//         if (arguments.length < length) {
//             var combined = [fn].concat(slice.call(arguments));
//             return curry(sub_curry.apply(this, combined), length - arguments.length);
//         } else {
//             return fn.apply(this, arguments);
//         }
//     };
// }

// const add = (x, y, z) => {
//     return x + y + z
// }

// const addSum = curry(add, 5)

// console.log('addSumArr', addSum(1)(2)(3))

//  深入使用闭包来实现

// 将每一次调用的函数参数缓存起来
function sub_curry(fn) {
  const args = Array.prototype.slice.call(arguments, 1);
  console.log("args", args);
  return function () {
    const newArgs = args.concat([].slice.call(arguments));
    console.log("innerArgs", arguments, newArgs);
    // 依次把之前的参数往前一个函数回调
    return fn.apply(this, newArgs);
  };
}

function curry(fn, length = 1) {
  if (fn.length > length) {
    throw new Error("修饰函数的参数不能大于指定的参数长度！");
  }

  return function () {
    // 如果后续函数调用之后传入的参数还小于指定参数，说明需要继续存储传入的参数值
    if (arguments.length < length) {
      const combined = [fn].concat(Array.prototype.slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      // 等传入最后一个调用的参数的时候调用sub_curry里面缓存了所有参数的函数
      return fn.apply(this, arguments);
    }
  };
}

const add = (x, y, z, q) => {
  console.log("x,y,z", x, y, z, q);
  return x + y + z + q;
};

const sumAdd = curry(add, 4);

console.log("sumAdd", sumAdd(1)(2)(3)(4));
