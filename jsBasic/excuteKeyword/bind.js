Function.prototype.bind2 = function (context) {
  const resetArguments = Array.prototype.slice.call(arguments, 1);
  const _this = this;
  return function () {
    const res = 
    _this.apply(
      context,
      Array.prototype.concat.call(arguments, resetArguments)
    );
  };
};

const obj = {
  name: "simone",
  age: 22,
};

function test1() {
  console.log("test1的值", this.name, arguments);
}

const bindDemo = test1.bind2(obj, "panyu", 22);

bindDemo();

// bindTest('nextArgument');
