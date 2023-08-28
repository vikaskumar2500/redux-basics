const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type == "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } else return state;
};

const store = redux.createStore(counterReducer);

// subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState.counter);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

store.dispatch({type:'DECREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'DECREMENT'});
