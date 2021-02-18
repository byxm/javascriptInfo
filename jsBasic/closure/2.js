function step(n, map) {
  //   if (n === 1) {
  //     map.set(1, 1);
  //     return 1;
  //   }
  //   if (n === 2) {
  //     map.set(2, 2);
  //     return 2;
  //   }
  //   if (map.has(n)) {
  //     return map.get(n);
  //   }
  //   const ret = step(n - 1, map) + step(n - 2, map);
  //   map.set(n, ret);
  //   return ret;
}

function excuteStep(n) {
  const map = new Map();
  map.set(1, 1);
  map.set(2, 2);
  for (let i = 3; i <= n; i++) {
    map.set(i, map.get(i - 1) + map.get(i - 2));
  }

  return map.get(n);
}

console.log(excuteStep(50));
