// thunk函数
const fs = require("fs");
const thunkify = require("thunkify");

function x(m) {
  return m + 5;
}

x(3);

// 等价于
function thunk() {
  return m + 5;
}

// function x(thunk) {
//     return thunk() + 5
// }

// const x = x(thunk)

// thunk函数即是函数传明调用的一种方式

function simpleThunk(fn) {
  return function () {
    const args = [...arguments];
    return function (callback) {
      args.push(callback);
      // console.log('real', real);
      return fn.apply(this, args);
    };
  };
}

const readFileThunk = simpleThunk(fs.readFile);

// readFileThunk('./generator.js')((err, res) => {
//     console.log('res', res.toString())
// })

// 使用thunk函数来对generator做流程管理

const readFile = thunkify(fs.readFile);

function* gen() {
  console.log("enter gen");
  const rtData = yield readFile("./generator.js");
  console.log("str1 end");
  const r2Data = yield readFile("../redux/demo.js");
  console.log("str2 end");
}

// const g = gen()

// const r1 = g.next();
// r1.value((err, data) => {
//    const r2 = g.next(data)
//    r2.value((err, data) => {
//         g.next(data)
//    })
// })

// 自动执行generator流程
function run(fn) {
  const g = fn();
  function next(err, data) {
    const result = g.next(data);
    if (result.done) {
      return g.return();
    }
    return result.value(next);
  }
  next();
}

// run(gen)

// console.log('leave run')

/***********************************************/

/**
 *
 * promise的自执行，也是利用上面的generator自执行的原理。
 * 和使用thunkify不同的是，promise得到结果是通过then链的调用嘛，所以只用把result.value(callback)换成then调用即可
 *
 */

function sleepValue(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${value} ${Math.random()}`);
    }, time * 1000);
  });
}

function* proGen() {
  console.log("11111111111111");
  const rt1 = yield sleepValue(2, "this is rt1");
  console.log("rt1", rt1);
  const rt2 = yield sleepValue(4, "this is rt2");
  console.log("rt2", rt2);
  const rt3 = yield sleepValue(2, "this is rt3");
  console.log("rt3", rt3);
}

function runPromise(fn) {
  const ge = fn();

  function runRecursion(ge, data) {
    const { value, done } = ge.next(data);
    if (done) {
      return value;
    }
    value.then((data) => {
      runRecursion(ge, data);
    });
  }

  runRecursion(ge);
}

runPromise(proGen)

console.log('sdffsdfsfsfsfdsfsdff')

/****************************************/

async function pro() {
  console.log(111111);
  const res = (await 1) + 1;
  console.log("sdfsfsf", res);
  const tr = (await 2) + 2;
  console.log("trtttrtt", tr);
}

// const res = pro();
// console.log('res', res);

// console.log('this is end')

/*********************************/

function* func() {
  console.log("enterfunc");
  yield 31;
  console.log("31 yield");
}

// const f = func();
// f.next();
// f.next()


function autoRunFunc(fn) {
  const f = fn();

  function next() {
    const { value, done } = f.next();
    if (done) {
      return f.return();
    }
    next();
  }
  next();
}

// autoRunFunc(func)

// console.log("sdfsfsdfs");
/**************/


// function add() {
//   return 5
// }

// async function genAdd() {
//   console.log('enter add')
//   await add();
//   console.log('middle add');
//   await add();
//   console.log('end add');
//   await add();
// }

// genAdd();
// console.log('hahahahah');


