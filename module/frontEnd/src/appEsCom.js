"use strict";

var _module = require("./esModules/module1");

var _module2 = require("./esModules/module2");

var _module3 = require("./esModules/module3");

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo)(); // app.js文件

(0, _module.bar)();
(0, _module2.fun1)();
(0, _module2.fun2)();
(0, _module4.default)();
