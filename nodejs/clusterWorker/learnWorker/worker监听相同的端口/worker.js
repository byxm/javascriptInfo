process.on("message", (msg, tcpServer) => {
  if (msg === "tcpServer" && tcpServer) {
    tcpServer.on("connection", (socket) => {
      setTimeout(() => {
        socket.end(`Request handle by process-${process.pid}`);
      }, 100);
    });
  }
});
