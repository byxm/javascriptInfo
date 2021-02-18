// 事件流程控制，利用执行器来调用任务进而实现流程的控制

class LazyManComponent {
  constructor(name) {
    this.taskQueue = [];
    const task = () => {
      console.log(`Hi ${name}`);
      this.next()
    };
    this.enqueueTask(task)
    setTimeout(() => {
      this.next();
    });
  }

  next() {
    const task = this.taskQueue.shift();
    task && task();
  }

  sleep(seconds) {
    const task = () => {
      setTimeout(() => {
        console.log("Wake up after 10s");
        this.next();
      }, seconds * 1000);
    };
    this.enqueueTask(task)
    return this;
  }

  enqueueTask(task) {
    this.taskQueue.push(task)
  }

  eat(food) {
    const task = () => {
      console.log(`Eat ${food}`)
      this.next()
    }
    this.enqueueTask(task)
    return this;
  }
}

function LazyMan(name) {
  return new LazyManComponent(name);
}

LazyMan("Simone").sleep(2).eat("banana");
