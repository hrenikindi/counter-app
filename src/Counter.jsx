import "./styles.css";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  let handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={() => handleInc()}>Increase</button>
      <button onClick={() => handleDec()}>Decrease</button>
    </div>
  );
}
