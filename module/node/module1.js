exports.done = false;
var b = require('./module2.js');
console.log('在 a.js 之中，b.done = %j', b.done);
exports.done = true;
console.log('a.js 执行完毕');






// a.js中,b.done false;
// a执行完毕 a.done = true