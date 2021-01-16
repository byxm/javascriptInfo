function count(state = { year: 2015 }, action) {
  switch (action.type) {
    case "add":
      return {
        year: state.year + 1,
      };
    case "sub":
      return {
        year: state.year - 1,
      };
    default:
      return state;
  }
}

const createStore = require("redux").createStore;

const store = createStore(count);

store.subscribe(function () {
  console.log(`the year is: ${store.getState().year}`);
});

// 触发state改变的唯一方式

const action1 = { type: "add" };
const action2 = { type: "add" };
const action3 = { type: "sub" };

store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
