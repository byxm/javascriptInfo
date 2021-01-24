function* test() {
  let a = 1 + 2;
  yield 5;
  const d = 5 + 5;
  yield 8;
  function add() {
      return 3+1
  }
  yield 9;
  yield 10;
}

test();



转义后的代码

"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(test);

function test() {
  var a, d, add;
  return regeneratorRuntime.wrap(function test$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          add = function add() {
            return 3 + 1;
          };

          a = 1 + 2;
          _context.next = 4;
          return 5;

        case 4:
          d = 5 + 5;
          _context.next = 7;
          return 8;

        case 7:
          _context.next = 9;
          return 9;

        case 9:
          _context.next = 11;
          return 10;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

test();


/******************************************************/
// 验证实现里面的while(1)是不是为了等待异步操作的


