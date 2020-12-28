// 一道Promise的面试题
// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7


async function async1() {
    console.log('async1 start');
    await async2(); // await是让出线程的标志，当await后面的表达式执行完成之后async函数剩下的内容就会被放到微队列中
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');



/**
 * script start
 * async1 start 
 * async2
 * promise1
 * script end
 * promsie2
 * asycn1 end
 * settimeout
 * 
 * 
*/