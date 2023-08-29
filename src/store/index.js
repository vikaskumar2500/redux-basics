const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.counter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - action.counter,
    };
  } else return state;
};

export const store = redux.createStore(counterReducer);



// export const incrementCounter = store.;

// export const decrementCounter = store.;