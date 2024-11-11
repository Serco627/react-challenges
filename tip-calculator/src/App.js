import { useState } from "react";
import "./App.css";

export default function App() {
  const [billInput, setBillInput] = useState("");
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  function handleReset() {
    setBillInput("");
    setMyPercentage(0);
    setFriendPercentage(0);
  }

  function handlePercentage(event, setPercentage) {
    setPercentage(event.target.value);
  }

  const averagePercentage =
    (Number(myPercentage) + Number(friendPercentage)) / 2;

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <Bill billInput={billInput} setBillInput={setBillInput} />
      <Percentage
        label="How did you like the service?"
        percentage={myPercentage}
        onHandlePercentage={(e) => handlePercentage(e, setMyPercentage)}
      />
      <Percentage
        label="How did your friend like the service?"
        percentage={friendPercentage}
        onHandlePercentage={(e) => handlePercentage(e, setFriendPercentage)}
      />
      <TipOutput billInput={billInput} averagePercentage={averagePercentage} />
      <ResetButton onHandleReset={handleReset} />
    </div>
  );
}

function Bill({ billInput, setBillInput }) {
  function handleChange(event) {
    event.preventDefault();
    setBillInput(event.target.value);
  }

  return (
    <div>
      <p>How much was the bill?</p>
      <input type="text" value={billInput} onChange={handleChange}></input>
    </div>
  );
}

function TipOutput({ billInput, averagePercentage }) {
  const tip = billInput * averagePercentage;
  const total = parseFloat(billInput) + tip;
  return (
    <div>
      {billInput === "" ? null : (
        <p style={{ fontWeight: "bold" }}>
          You pay ${total} (${billInput} + ${tip} tip)
        </p>
      )}
    </div>
  );
}

function Percentage({ label, percentage, onHandlePercentage }) {
  return (
    <div>
      <p>{label}</p>
      <select value={percentage} onChange={onHandlePercentage}>
        <option value="0">It was bad (0%)</option>
        <option value="0.05">It was okay (5%)</option>
        <option value="0.10">It was good (10%)</option>
        <option value="0.20">It was amazing (20%)</option>
      </select>
    </div>
  );
}

function ResetButton({ onHandleReset }) {
  return <button onClick={onHandleReset}>Reset</button>;
}
