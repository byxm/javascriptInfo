"use strict";

var _marked = /*#__PURE__*/ regeneratorRuntime.mark(proGen);

function sleepValue(time, value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value + " " + Math.random());
    }, time * 1000);
  });
}

function proGen() {
  var rt1, rt2, rt3;
  return regeneratorRuntime.wrap(
    function proGen$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            console.log("11111111111111");
            _context.next = 3;
            return sleepValue(2, "this is rt1");

          case 3:
            rt1 = _context.sent;

            console.log("rt1", rt1);
            _context.next = 7;
            return sleepValue(4, "this is rt2");

          case 7:
            rt2 = _context.sent;

            console.log("rt2", rt2);
            _context.next = 11;
            return sleepValue(2, "this is rt3");

          case 11:
            rt3 = _context.sent;

            console.log("rt3", rt3);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    },
    _marked,
    this
  );
}

function runPromise(fn) {
  var ge = fn();

  function runRecursion(ge, data) {
    var _ge$next = ge.next(data),
      value = _ge$next.value,
      done = _ge$next.done;

    if (done) {
      return value;
    }
    value.then(function (data) {
      runRecursion(ge, data);
    });
  }

  runRecursion(ge);
}

runPromise(proGen);
