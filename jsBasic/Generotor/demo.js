function sleepValue(time, value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${value} ${Math.random()}`);
      }, time * 1000);
    });
  }
  
  function* proGen() {
    console.log('11111111111111')
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
  
    runRecursion(ge)
  
  }
  
  runPromise(proGen)