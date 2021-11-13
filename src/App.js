import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <div className="btns">
          <button onClick={() => setCounter(counter + 1)} className="btn">
            Increase
          </button>
          <button onClick={() => setCounter(counter - 1)} className="btn">
            Decrease
          </button>
          <button onClick={() => setCounter(0)} className="btn">
            CLEAR!
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
