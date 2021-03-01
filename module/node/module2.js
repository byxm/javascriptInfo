exports.done = false;
var a = require('./module1.js');
console.log('在 b.js 之中，a.done = %j', a.done);
exports.done = true;
console.log('b.js 执行完毕');


// b.js之中，a.done = false;
// b.js执行完毕