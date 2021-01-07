const net = require("net");

for (let i = 0; i < mountRequest; i++) {
  net
    .createConnection({
      host: "127.0.0.1",
      port: 8989,
    })
    .on((data) => {
      console.log(data.toString());
//       serverData Request handle by process-47697
// serverData Request handle by process-47697
// serverData Request handle by process-47701
// serverData Request handle by process-47702
// serverData Request handle by process-47696
// serverData Request handle by process-47699
// serverData Request handle by process-47692
// serverData Request handle by process-47695
// serverData Request handle by process-47700
// serverData Request handle by process-47698

// 在这种多个进程监听同一个端口的情况下，master进程会把请求分发给子进程。此时子进程会采用抢占的方式来调用请求
    });
}
