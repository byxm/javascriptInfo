class Application {
  constructor() {
    this.middleware = [];
  }

  use(fn) {
    this.middleware.push(fn);
  }

  compose() {
    const _this = this;
    return function (ctx = null, next) {
      return dispatch(0);
      function dispatch(i) {
        const fn = _this.middleware[i];
        if (!fn) return Promise.resolve();
        try {
          return Promise.resovle(fn(null, dispatch.bind(null, i + 1)));
        } catch (e) {
          return Promise.reject(e);
        }
      }
    };
  }

}

const app = new Application();

app.use((ctx, next) => {
  console.log(1);
  next();
  console.log(2);
});

app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4);
});

app.use((ctx, next) => {
  console.log(5);
  next();
  console.log(6);
});

app.compose()()

