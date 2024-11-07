import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(event) => {
          setStep(Number(event.target.value));
        }}
      ></input>

      <span> Step: {step} </span>
      <br></br>
      <br></br>

      <button
        onClick={() => {
          setCount(count - step);
        }}
      >
        -
      </button>
      <input
        type="text"
        value={count}
        onChange={(event) => {
          setCount(Number(event.target.value));
        }}
      ></input>
      <button
        onClick={() => {
          setCount(count + step);
        }}
      >
        +
      </button>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
