import { useDispatch, useSelector } from "react-redux";
import "./ToggleButtons.css";
import { Button } from "react-bootstrap";

const ToggleButtons = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="toggle">
      <h2>Toggle Counter</h2>
      <div>
        <Button
          variant="secondary"
          onClick={() => {
            dispatch({ type: "decrement", counter: 5 });
          }}
        >
          -
        </Button>
        <span>{counter}</span>
        <Button
          variant="success"
          onClick={() => {
            dispatch({ type: "increment", counter: 5 });
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ToggleButtons;
