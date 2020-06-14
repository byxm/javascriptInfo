const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));



fs.readFileAsync('./package.json').then(res => {
    console.log('res', res);
})