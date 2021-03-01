let curry = (fn) => {
    const resFn = (...allArgs) => allArgs.length>=fn.length
    ? fn(...allArgs)
    : (...args)=>resFn(...allArgs,...args);
    return resFn
  };
  
  const foo = curry((a,b,c,d)=>{console.log(a,b,c,d);});
  
  foo(1)(2)(3)(4); // 1,2,3,4 
  
  foo(1)(2)(3);    // 无输出
  
  const f = foo(1)(2)(3);
  
  f(5) //1,2,3,5