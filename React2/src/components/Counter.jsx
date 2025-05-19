import React from "react";
import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prev) => prev + 1);
  }
  function decrement() {
    setCounter((prev) => prev - 1);
  }
  function reset() {
    setCounter(0);
  }
  return (
    <div className="container text-center">
      <button onClick={increment} className="btn btn-primary m-2">
        Increment
      </button>
      <p className="display-4">{counter}</p>
      <button onClick={decrement} className="btn btn-secondary m-2">
        Decrement
      </button>
      <button onClick={reset} className="btn btn-danger m-2">
        Reset
      </button>
    </div>
  );
}

export default Counter;
