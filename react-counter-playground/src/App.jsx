import { useState, useEffect } from "react";

function App() {
  const INCREMENT = "plus";
  const DECREMENT = "minus";
  const RESET = "reset";
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Count: ${counter}`;
  }, [counter]);

  function applyCounter(val) {
    if (val === INCREMENT) {
      setCounter((prevCounter) => prevCounter + 1);
    } else if (val === DECREMENT && counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    } else if (val === RESET) {
      setCounter(0);
    }
  }

  return (
    <div>
      <button onClick={() => applyCounter(DECREMENT)}>-1</button>
      <button onClick={() => applyCounter(INCREMENT)}>+1</button>
      <button onClick={() => applyCounter(RESET)}>Reset</button>

      <div className="counter-wrapper">
        <span className="counter"> {counter}</span>
        {counter >= 10 && <p className="counter-message">🔥 You reached 10!</p>}
      </div>

      <h3>The counter is {counter % 2 === 0 ? "Even" : "Odd"}</h3>
    </div>
  );
}

export default App;
