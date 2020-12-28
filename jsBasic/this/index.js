

let user = {
    name:'simone',
    printName: () => {
        console.log('name',user)
    }
}


let admin = user;
// admin.name = 'panyu'
// user.name = 'panyu'
// admin = null;
admin.name = 'panyu'

// console.log('admin', admin.name, user.name)
console.log('userAndAdmin', user, admin);
admin.printName()


