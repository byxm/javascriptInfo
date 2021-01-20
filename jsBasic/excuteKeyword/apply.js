
Function.prototype.myApply = function() {
    const args = [...arguments]
    const context = args.shift();
    context.fn = this;
    return context.fn(...args[0])
}


function fn(age, sex) {
    console.log('name',this.name)
    console.log('args',age, sex)
}

const obj = {
    name: 'simone'
}

fn.myApply(obj, [22, '男'])















