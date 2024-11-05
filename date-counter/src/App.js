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
      <button
        onClick={() => {
          setStep(step - 1);
        }}
      >
        -
      </button>
      <span> Step: {step} </span>
      <button
        onClick={() => {
          setStep(step + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - step);
        }}
      >
        -
      </button>
      <span> Count: {count} </span>
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
