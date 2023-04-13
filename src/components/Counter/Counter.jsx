import React, { useState } from "react";
import "./counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increase = () => {
    setCount(count + 1);
    if (message !== "" && count === 0) {
      setMessage("");
    }
  };

  const decrease = () => {
    count > 0 ? setCount(count - 1) : setMessage("Counter should be above the zero");
  };
  console.log(count);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{message !== "" && count === 0 ? message : count}</h2>
      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
