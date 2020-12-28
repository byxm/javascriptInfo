const buffer = new ArrayBuffer(12)
const dataView = new DataView(buffer) // 对一段12字节的内存建立DataView视图
dataView.getUint8(0); //以unit8方式读取第一个字节

const x1 = new Uint8Array(buffer);
const x2 = new Uint32Array(buffer);

x1[0] = 1;
x1[0] = 2;

// 两个视图对应同一段内存，改了其中一个也会影响到另外一个

console.log('buffer', buffer, x1[0]);