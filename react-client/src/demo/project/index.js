import React, { useState, useMemo, memo, useCallback, useEffect, useRef, createRef } from "react";
// import React, { useEffect } from "react";

// function TestDemo() {
//   const [count, setCount] = useState(0);

//   function alertNumber() {
//     setTimeout(() => {
//         // setCount(count + 1) // 始终只能拿到最初渲染那一次的值
//         setCount(count => count + 1); // 使用函数式更新就能拿到上一次更新后的state
//         // alert(count) // 始终只能拿到最初渲染那一次的值
//     }, 3000);
//   }

//   return (
//     <>
//       <button onClick={() => setCount(count => count + 1)}>click me</button>
//       {count}
//       <button onClick={alertNumber}>alertNumber</button>
//     </>
//   );
// }

// export default TestDemo;

// function TestDemo() {
//   function getInitial() {
//     console.log("hahahaha");
//     return {
//       number: 10,
//     };
//   }
//   const [count, setCount] = useState(getInitial);

//   return (
//     <div>
//       <button onClick={() => setCount({ number: count.number + 1 })}>
//         btn1
//       </button>
//       {count.number}
//       <button>btn2</button>
//     </div>
//   );
// }

// hooks不会自动合并state进行更新和类组件不一样
// function TestDemo(props) {
//   const [count, setCount] = useState({ name: "performance", number: 0 });
//   console.log("testRender", count);
//   return (
//     <>
//       <button
//         onClick={() => {
//           count.address = 'chengdu'
//           setCount(count);
//         }}
//       >
//         +++
//       </button>
//       {count.number}
//       <button onClick={() => setCount(count)}>+</button>
//     </>
//   );
// }

/***********************************/

// function SubTest(props) {
//   console.log("SubTestProps", props);

//   return (
//     <>
//       <button onClick={props.onClick}>SubTest++++</button>
//     </>
//   );
// }

// SubTest = memo(SubTest);

// function TestDemo(props) {
//   const [state, setState] = useState(0);
//   const [number, setNumber] = useState(1);
//   const data = { number };
//   const addSum = () => {
//     console.log("click");
//     setNumber(number + 1);
//   };

//     // const data = useMemo(() => ({ number }), [number]);

//     // const addSum = useCallback(() => {
//     //   console.log('click')
//     //   setNumber(number + 1);
//     // }, [number]);

//   return (
//     <>
//       <button onClick={() => setState(state + 1)}>+++</button>
//       <p>{state}</p>
//       <SubTest data={data} onClick={addSum} />
//     </>
//   );
// }

/***********************************/

/*************************************/

// let firstWorkInProgressHook = { memoizedState: null, next: null };
// let workInProgressHook;

// function useState(initState) {
//   let currentHook = workInProgressHook.next
//     ? workInProgressHook.next
//     : { memoizedState: initState, next: null };

//   function setState(newState) {
//     currentHook.memoizedState = newState;
//     render();
//   }
//   // 这就是为什么 useState 书写顺序很重要的原因
//   // 假如某个 useState 没有执行，会导致指针移动出错，数据存取出错
//   if (workInProgressHook.next) {
//     // 这里只有组件刷新的时候，才会进入
//     // 根据书写顺序来取对应的值
//     // console.log(workInProgressHook);
//     workInProgressHook = workInProgressHook.next;
//     console.log("workInProgressHook1", workInProgressHook);
//   } else {
//     // 只有在组件初始化加载时，才会进入
//     // 根据书写顺序，存储对应的数据
//     // 将 firstWorkInProgressHook 变成一个链表结构
//     workInProgressHook.next = currentHook;
//     console.log("workInProgressHook", workInProgressHook);
//     // 将 workInProgressHook 指向 {memoizedState: initState, next: null}
//     workInProgressHook = currentHook;

//     // console.log(firstWorkInProgressHook);
//   }
//   return [currentHook.memoizedState, setState];
// }

// function TestDemo() {
//   // 每次组件重新渲染的时候，这里的 useState 都会重新执行
//   const [name, setName] = useState("计数器");
// //   const [number, setNumber] = useState(0);
//   return (
//     <>
//       <p>
//         {/* {name}:{number} */}
//       </p>
//       {/* <button onClick={() => setName("新计数器" + Date.now())}>新计数器</button> */}
//       {/* <button onClick={() => setNumber(number + 1)}>+</button> */}
//     </>
//   );
// }

// function render() {
//   // 每次重新渲染的时候，都将 workInProgressHook 指向 firstWorkInProgressHook
//   workInProgressHook = firstWorkInProgressHook;
//   ReactDOM.render(<TestDemo />, document.getElementById("root"));
// }

// render();

/*************************************/

/*********************************************/

// 自定义hooks

// function useNumber() {
//   const [number, setNumber] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setNumber((number) => number + 1);
//     // setNumber(number + 1);
//     }, 1000);
//   }, []);
//   return [number, setNumber];
// }

// function Counter1() {
//   const [number, setNumber] = useNumber();
//   console.log('count1');
//   return (
//     <>
//       <button onClick={() => setNumber(number + 1)}>{number}</button>
//     </>
//   );
// }

// function Counter2() {
//   const [number, setNumber] = useNumber();
//   return (
//     <>
//       <button onClick={() => setNumber(number + 1)}>{number}</button>
//     </>
//   );
// }

// function TestDemo() {
//   return (
//     <>
//       <Counter1 />
//       <Counter2 />
//     </>
//   );
// }

/*********************************************/

// function TestDemo() {
//   const blockRender = () => {
//     for (let i = 0; i < 1e9; i++) {}
//   };

//   const bigData = async (max = 100) => {
//     // await blockRender();
//     // console.log("block1");
//     // await blockRender();
//     // console.log("block1");
//     // await blockRender();
//     // console.log("block1");
//     // await blockRender();

//     const startTest = async (number) => {
//       if (number === 0) {
//         return "done";
//       }
//       await blockRender();
//       number--;
//       //   setTimeout(async () => {
//       console.log("number", number);
//       //   })
//       await startTest(number);
//     };

//     // setTimeout(async () => {
//     await startTest(max);
//     // });

//     // return await startTest(max);
//   };

//   //   bigData();

//   const clickBigData = async () => {
//     const res = await bigData();
//     console.log("res", res);
//   };

//   console.log("the end");

//   return (
//     <>
//       div content
//       <button onClick={clickBigData}>来点我</button>
//     </>
//   );
// }


/*************************************************************/
function TestDemo() {
  let [number, setNumber] = useState(0);
  const [initValue, setInitValue] = useState('lalalalalaal');
  useEffect(() => {
      setInitValue('xixixixxixix')
  }, [])
  return (
      <>
          <Child initValue={initValue}  />
          <button onClick={() => setNumber({ number: number + 1 })}>+</button>
      </>
  )
}


let input;
function Child(props) {
    const inputRef = useRef();
    const [initValue, setInitValue] = useState(props.initValue) 
    console.log('initValue-------------', initValue, props.initValue)

    console.log('input===inputRef', input === inputRef);
    input = inputRef;
    function getFocus() {
        inputRef.current.focus();
    }
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={getFocus}>获得焦点</button>
        </>
    )
}




export default TestDemo;
