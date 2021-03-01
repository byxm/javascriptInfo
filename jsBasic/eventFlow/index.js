// 事件流程控制，利用执行器来调用任务进而实现流程的控制

// class LazyManComponent {
//   constructor(name) {
//     this.taskQueue = [];
//     const task = () => {
//       console.log(`Hi ${name}`);
//       this.next()
//     };
//     this.enqueueTask(task)
//     setTimeout(() => {
//       this.next();
//     });
//   }

//   next() {
//     const task = this.taskQueue.shift();
//     task && task();
//   }

//   sleep(seconds) {
//     const task = () => {
//       setTimeout(() => {
//         console.log("Wake up after 10s");
//         this.next();
//       }, seconds * 1000);
//     };
//     this.enqueueTask(task)
//     return this;
//   }

//   enqueueTask(task) {
//     this.taskQueue.push(task)
//   }

//   eat(food) {
//     const task = () => {
//       console.log(`Eat ${food}`)
//       this.next()
//     }
//     this.enqueueTask(task)
//     return this;
//   }
// }

// function LazyMan(name) {
//   return new LazyManComponent(name);
// }

// LazyMan("Simone").sleep(2).eat("banana");

class LazyManComponent {
  constructor(name) {
    this.taskQueue = [];
    this.enqueueTask(() => {
      console.log(`Hi ${name}`);
      this.next();
    });
    setTimeout(() => {
      this.next();
    });
  }

  excuteTask() {
    const task = this.taskQueue.shift();
    task && task();
  }

  enqueueTask(task) {
    this.taskQueue.push(task);
  }

  next() {
    this.excuteTask();
  }

  sleep(second) {
    this.enqueueTask(() => {
      setTimeout(() => {
        console.log(`waiter for time ${second}s`);
        this.next();
      }, second * 1000);
    });
    return this;
  }

  eat(food) {
    this.enqueueTask(() => {
      console.log(`eat ${food}`);
      this.next();
    });
    return;
  }
}

function lazyMan(name) {
  return new LazyManComponent(name);
}

lazyMan("Simone").sleep(2).eat("apple");
