const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + action.counter,
    };
  } else if (action.type == "DECREMENT") {
    return {
      counter: state.counter - action.counter,
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

store.dispatch({ type: "INCREMENT" ,counter:2});
store.dispatch({ type: "INCREMENT" ,counter:2});
store.dispatch({ type: "INCREMENT" ,counter:2});
store.dispatch({ type: "INCREMENT" ,counter:2});
store.dispatch({ type: "INCREMENT" ,counter:2});


store.dispatch({type:'DECREMENT', counter:2});
store.dispatch({type:'DECREMENT', counter:2});
store.dispatch({type:'DECREMENT', counter:2});

