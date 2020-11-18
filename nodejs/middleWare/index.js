

async function testAsync1() {
    console.log('this call stack1')
    return Promise.resolve('testAsync1')
}

function testAsync2() {
    console.log('this call stack2')
    return Promise.resolve('testAsync2')
}
function testAsync3() {
    return Promise.resolve('testAsync3')
}

function myTest() {
    testAsync1()
    testAsync2()
    console.log('myTest')
}

myTest();




// async function testAwait() {
//     return 'await'
// }
