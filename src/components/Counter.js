import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter.counter}</div>
      <button
        style={{ marginRight: "1rem" }}
        onClick={() => {
          dispatch(counterActions.decrement(5));
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          dispatch(counterActions.toggle());
        }}
      >
        Toggle Counter
      </button>

      <button
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          dispatch(counterActions.increment(5));
        }}
      >
        +
      </button>
    </main>
  );
};

export default Counter;
