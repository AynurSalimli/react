import React, { useState } from "react";
import "./counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = ()=>{
    setCount(count + 1)
  }

  const decrease = () =>{
    count > 0 && setCount(count-1)
  }
  console.log(count);
  return (
    <div className="counter">
        <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
