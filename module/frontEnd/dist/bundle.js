(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// app.js文件
// 引入第三方库，应该放置在最前面
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

module1.foo() //module1
module2() //module2
module3.foo() //foo() module3
},{"./modules/module1":2,"./modules/module2":3,"./modules/module3":4}],2:[function(require,module,exports){
module.exports = {
    msg: 'module1',
    foo() {
      console.log(this.msg)
    }
  }
},{}],3:[function(require,module,exports){
//module2.js
module.exports = function() {
    console.log('module2')
  }
},{}],4:[function(require,module,exports){
//module3.js
exports.foo = function() {
    console.log('foo() module3')
  }
  exports.arr = [1, 2, 3, 3, 2]
},{}]},{},[1]);
