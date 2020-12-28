function myNew(fn, ...prop) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  const fnRes = fn.apply(obj, prop);
  return typeof fnRes === "object" ? fnRes : obj;
}

function demo(name, age) {
  this.name = name;
  this.age = age;
  return {
      name: 'chen'
  }
}

demo.prototype.testFunc = () => {};

const newDemo = myNew(demo, "simone", 22);

console.log("newDemo", newDemo);
