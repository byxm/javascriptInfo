const p1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("p1");
    }, 2000);
  });

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("出错了");
      resolve("出错了");
    }, 5000);
  });

const PromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const firstPromise = promises.shift();
    const resultArr = [];
    const startPro = (request) => {
      Promise.resolve(request).then(
        (res) => {
          resultArr.push(res);
          if (!promises.length) {
            resolve(resultArr);
            return;
          }
          const nextPromise = promises.shift();
          startPro(nextPromise);
        },
        (reason) => {
          resultArr.push(reason);
          if (!promises.length) {
            resolve(resultArr);
            return;
          }
          const nextPromise = promises.shift();
          startPro(nextPromise);
        }
      );
    };
    startPro(firstPromise);
  });
};

PromiseAll([p1(), p2()]).then((res) => {
  console.log("resultArrrrr", res);
});
