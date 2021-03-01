// app.js文件
// 引入第三方库，应该放置在最前面
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

module1.foo() //module1
console.log(module2);//module2
module3.foo() //foo() module3



