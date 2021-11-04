import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "TOGGLE":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: false,
    myName: "johny",
    balance: 280,
  });
  return (
    <div>
      <h2>Use Reducer</h2>
      <h1>{state.count}</h1>
      <Button
        className="m-2"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE" });
        }}
      >
        +
      </Button>
      <Button
        className="m-2"
        onClick={() => {
          dispatch({ type: "DECREMENT" });
          dispatch({ type: "TOGGLE" });
        }}
      >
        -
      </Button>
      {state.showText && <p>here is your text</p>}
    </div>
  );
};

export default UseReducer;
