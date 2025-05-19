import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="container text-center">
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-primary m-2"
      >
        Increment
      </button>
      <p className="display-4">{state}</p>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-secondary m-2"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-danger m-2"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
