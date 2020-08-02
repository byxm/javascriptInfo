/**
 * @description 掘金nodejs流博客
 * @addresses https://juejin.im/post/6844903481308872712
*/


const { Readable, Duplex } = require('stream');  

// const inStream = new Readable({
//     read(size) {
//       console.log('szie',size);
//       this.push(String.fromCharCode(this.currentCharCode++));
//       if (this.currentCharCode > 90) {
//         this.push(null);
//       }
//     }
//   });
  
//   inStream.currentCharCode = 65
  
//   inStream.pipe(process.stdout);


//   const inoutStream = new Duplex({
//     write(chunk, encoding, callback) {
//       console.log(chunk.toString());
//       callback();
//     },
  
//     read(size) {
//       this.push(String.fromCharCode(this.currentCharCode++));
//       if (this.currentCharCode > 90) {
//         this.push(null);
//       }
//     }
//   });
  
//   inoutStream.currentCharCode = 65;
  
//   process.stdin.pipe(inoutStream).pipe(process.stdout);



// const fs = require('fs');
// const zlib = require('zlib');
// const file = process.argv[2];

// fs.createReadStream('./file/big.file')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream(file + '.gz'));









const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(outStream);