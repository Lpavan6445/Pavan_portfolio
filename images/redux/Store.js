import { createStore } from "redux";

// class Store {
//   constructor(reducer, init) {
//     this.reducer = reducer;
//     this.state = init;
//   }

//   getState() {
//     return this.state;
//   }

//   dispatch(actions) {
//     this.state = this.reducer(this.state, actions);
//   }
// }

// store: { count: 0, todo: [] }
const reducer = (store, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return { ...store, count: store.count + action.payload };
    case "DEC_COUNT":
      return { ...store, count: store.count - action.payload };
    case "ADD_TODO":
      return { ...store, todo: [...store.todo, action.payload] };
    default:
      return store;
  }
};

const init = { count: 0, todo: [] };

// KISS
const store = createStore(reducer, init);
console.log(store.getState());

store.dispatch({ type: "INC_COUNT", payload: 1 });

console.log(store.getState());

store.dispatch({ type: "DEC_COUNT", payload: 4 });

console.log(store.getState());

store.dispatch({
  type: "ADD_TODO",
  payload: [
    { id: 1, status: false, title: "Learn Redux" },
    { id: 1, status: false, title: "Learn Redux" },
  ],
});

console.log(store.getState());
