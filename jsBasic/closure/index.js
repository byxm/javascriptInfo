
// demo1
function fn() {
    let value = 1;
    return function() {
        console.log('value', value);
    }
}


const g = fn(); // g.[[Environment]] 存储了对相应 f() 调用的词法环境的引用

console.log('gggggg', g);



// demo2
// 内部返回的函数中途一旦出现中断那么闭包引用的变量和参数就会被销毁掉
function f() {
    let value = Math.random();
  
    function g() {
      debugger; // 在 Console 中：输入 alert(value); No such variable!
    }
  
    return g;
  }
  
  let g = f();
  g();