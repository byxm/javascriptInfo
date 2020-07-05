const p = new Promise((resolve, reject) => {
    resolve('success');
})

p.then((data) => {
    console.log(data);
    return Promise.reject('oh, no!');
}).catch(value => {
    console.log('error1', value);
    return Promise.reject('the next error show time');
}).then((data) => {
    console.log('value1',data);
}, (data) => {
    console.log('value2',data);
})