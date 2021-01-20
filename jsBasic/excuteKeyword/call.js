Function.prototype.myCall = function () {
  const args = [...arguments];
  const context = args.shift();
  context.fn = this; // 将要调用的函数赋值给要绑定对象上的一个新属性，然后用这个属性去执行这个函数即可
  return context.fn(...args);
};

const fn = function (arg) {
  console.log("name", this.name, arg);
};

const obj = {
  name: "simone",
};

fn.myCall(obj, "hahahah");
