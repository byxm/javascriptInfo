// 创建一个空的简单JavaScript对象（即{}）；
// 链接该对象（设置该对象的constructor）到另一个对象 ；
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。



function New() {

    const obj = {}     
    
    const Constructor = Array.prototype.shift.call(arguments);  
    
    obj.__proto__ = Constructor.prototype;

    const res = Constructor.apply(obj, arguments) 

    return typeof res === 'object' ? res : obj;

}



function User(name, age) {
   this.name = name; 
   this.age = age
}

User.prototype.printName = function() {
    console.log('打印名称',this.name)
}


const res = New(User, 'simone', 22)

console.log('res',res)

res.printName()











