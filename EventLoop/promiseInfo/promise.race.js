const p1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("p1");
    }, 5000);
  });

const p2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("p2");
    }, 2000);
  });

const PromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    while (promises.length) {
      const firstRequest = promises.shift();
      Promise.resolve(firstRequest).then(
        (res) => {
          return resolve(res);
        },
        (reason) => reject(reason)
      );
    }
  });
};

PromiseRace([p1(), p2()]).then((res) => {
  console.log("ressssss", res);
});
