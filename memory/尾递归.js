
// function fnD(n) {
//     if(n === 1) return 1
//     return n * fnD(n - 1)
// }




function fn(n, total = 1) {
    if(n === 1) {return  total}
    return fn(n - 1, n * total) 
}

// console.log()


fn(65000)
