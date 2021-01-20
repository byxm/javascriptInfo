

console.log(-0 == -0) // true

console.log(null == undefined) // false

console.log(NaN == NaN) // false

console.log(Number('')) // 0 按照js内部的转换规则进行转换

console.log([] + []) // '' 因为[]的原始值是''

console.log([] + {}) // [Object Object]

console.log([] == ![]) // 根据隐式装箱的原理转化成了 0 == 0








