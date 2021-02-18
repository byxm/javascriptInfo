class EventFlow {
  constructor() {
    this.taskQueue = [];
  }

  next() {
    const task = this.taskQueue.shift();
    task && task();
  }

  enqueueTask(task) {
    this.taskQueue.push(task);
  }

  fetchTask(ftTask) {
    const task = () => {
      ftTask(this.next.bind(this));
    };
    this.enqueueTask(task);
  }

  startExcute() {
      this.next();
  }
}


export default EventFlow
