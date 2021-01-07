const net = require('net')


for(let i = 0; i < 10; i++) {
  net.createConnection({
    host: '127.0.0.1',
    port: 8989
  }).on('data', (data) => {
    console.log(data.toString());
  })
}