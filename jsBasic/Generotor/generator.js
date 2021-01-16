// https://segmentfault.com/a/1190000014495747
// thunk函数 http://www.ruanyifeng.com/blog/2015/05/thunk.html

// function* quie() {
//   yield sleep(1000, "correct");
//   console.log("ww3wwwwww");
//   console.log('ccccwwwwwwwwweeeee')
//   yield '我第二个返回'
//   console.log('seconddddddddddd')

//   return 'finally'

// }

// const sleep = (time, value) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, time);
//   });
// };

// const g = quie();
// console.log("value", g.next());
// console.log('value1', g.next())
// console.log('value2', g.next())

// 斐波那契数列基本解法
function fibonaci(n) {
  const numMap = new Map();
  numMap.set(0, 0);
  numMap.set(1, 1);
  for (let i = 2; i <= n; i++) {
    numMap.set(i, numMap.get(i - 1) + numMap.get(i - 2));
  }
  return numMap.get(n);
}

// 利用generator实现斐波那契数列，基本思路是利用generator的中断特性来求值。每次调用next即可中断进行一次求值

function* fibonaciGenerate() {
  let [prev, cur] = [0, 1];
  while (true) {
    [prev, cur] = [cur, prev + cur];
    yield cur;
  }
}

function getResult(n) {
  const fi = fibonaciGenerate();
  while (n > 3) {
    fi.next();
    n--;
  }
  console.log(fi.next().value);
}

// getResult(3)

function* gc(n) {
  yield 3;
  yield 5;
  const ret = yield 6;
  console.log("ret", ret);
  return ret;
}

const g = gc(1000);

// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next()) // next里面传入的参数表示上一次yield后面的表达式返回的值

// generator的错误捕获，可以实现generator的出错位置和捕获错误的地方分离
function* error() {
  let ret, res;
  try {
    ret = yield 6;
  } catch (err) {
    console.error("errrr", err);
  }

  return ret;
}

// const e = error();
// console.log(e.next())
// e.throw('这里出错了') // 中途只要抛出错误后面的next也就不能执行了
// console.log(e.next(11))

function* gen() {
    const ret = yield 4
    console.log('ret', ret);
    return 1
}

const res = gen();

console.log('res',res.next(33) )
res.next();





