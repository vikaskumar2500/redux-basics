// this is the normal redux.

// const redux = require("redux");

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + action.counter,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       counter: state.counter - action.counter,
//     };
//   } else return state;
// };

// export const store = redux.createStore(counterReducer);
// export default store;

// this is the @redux/toolkit !important😎😎.
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showToggleCounter: false },
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrement: (state, action) => {
      state.counter = state.counter - action.payload;
    },
    toggle: (state) => {
      state.showToggleCounter = !state.showToggleCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// creating store that we have to put into
// the Provider tag inside the index.js always!!!!!🤦‍♀️🫥.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// we export all the action that helps us for the dispatching actions.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
