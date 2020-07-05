// const fs = require("fs");

// function hello(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// }

// // 简单写法
// // hello('./package.json').then((data) => {
// //     console.log('way1 data', data);
// //     return new Promise((resolve, reject) => {
// //         resolve(data)
// //     })
// // }).then(data => {
// //     return new Promise((resolve, reject) => {
// //         resolve('1')
// //     })
// // }).then(data => {
// //     console.log(data);
// //     return new Promise((resolve, reject) => {
// //         reject('callback is error')
// //     })
// // }).catch((err) => {
// //     console.error('program is error', err);
// // })

// // 嵌套写法
// // hello("./package.json")
// //   .then((data) => {
// //     console.log("way1 data", data);
// //     return new Promise((resolve, reject) => {
// //       resolve(data);
// //     })
// //       .then((data) => {
// //         console.log("way2 data", data);
// //         return new Promise((resolve, reject) => {
// //           resolve("1");
// //         });
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   })
// //   .then((data) => {
// //     console.error("way3 data", data);
// //     return new Promise((resolve, reject) => {
// //       reject("callback is error");
// //     });
// //   })
// //   .catch((err) => {
// //     console.error(err);
// //   });

// const step1 = (data) => {
//   console.log("way1 data", data);
//   return new Promise((resolve, reject) => {
//     resolve(data);
//   })
//     .then((data) => {
//       console.log("way2 data", data);
//       return new Promise((resolve, reject) => {
//         resolve("1");
//       });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// const step2 = (data) => {
//   console.error("way3 data", data);
//   return new Promise((resolve, reject) => {
//     reject("callback is error");
//   }).catch((err) => {
//     console.error(err);
//   });
// };

// hello("./package.json").then(step1).then(step2)



