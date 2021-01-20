// Function.prototype.bind2 = function (context) {
//   const resetArguments = Array.prototype.slice.call(arguments, 1);
//   const _this = this;
//   return function () {
//     const res =
//     _this.apply(
//       context,
//       Array.prototype.concat.call(arguments, resetArguments)
//     );
//   };
// };

// const obj = {
//   name: "simone",
//   age: 22,
// };

// function test1() {
//   console.log("test1的值", this.name, arguments);
// }

// const bindDemo = test1.bind2(obj, "panyu", 22);

// bindDemo();

// // bindTest('nextArgument');

Function.prototype.bind2 = function () {
  const args = [...arguments].slice(1);
  const context = [...arguments].shift();
  const _this = this
  return function () {
    const newArgs = [...arguments].concat(args);
    console.log('newArgs', newArgs)
    return _this.apply(context, newArgs);
  };
};

const fn = function() {
  console.log(this.name, arguments)
}

const obj = {
  name: 'simone'
}

const f = fn.bind2(obj, 'test')

f('test1')



