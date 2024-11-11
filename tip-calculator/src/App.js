import { useState } from "react";
import styled from "styled-components";

export default function App() {
  return (
    <AppContainer>
      <TipCalculator />
    </AppContainer>
  );
}

function TipCalculator() {
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
    <CalculatorContainer>
      <Title>Tip Calculator</Title>
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
      {billInput === "" ? null : (
        <>
          <TipOutput
            billInput={billInput}
            averagePercentage={averagePercentage}
          />
          <ResetButton onHandleReset={handleReset} />
        </>
      )}
    </CalculatorContainer>
  );
}

function Bill({ billInput, setBillInput }) {
  function handleChange(event) {
    event.preventDefault();
    setBillInput(event.target.value);
  }

  return (
    <Section>
      <Label>How much was the bill?</Label>
      <Input type="text" value={billInput} onChange={handleChange} />
    </Section>
  );
}

function Percentage({ label, percentage, onHandlePercentage }) {
  return (
    <Section>
      <Label>{label}</Label>
      <Select value={percentage} onChange={onHandlePercentage}>
        <option value="0">It was bad (0%)</option>
        <option value="0.05">It was okay (5%)</option>
        <option value="0.10">It was good (10%)</option>
        <option value="0.20">It was amazing (20%)</option>
      </Select>
    </Section>
  );
}

function TipOutput({ billInput, averagePercentage }) {
  const tip = billInput * averagePercentage;
  const total = parseFloat(billInput) + tip;
  return (
    <Output>
      <h3>
        You pay ${total.toFixed(0)} (${billInput} + ${tip.toFixed(0)} tip)
      </h3>
    </Output>
  );
}

function ResetButton({ onHandleReset }) {
  return <StyledButton onClick={onHandleReset}>Reset</StyledButton>;
}

// Styled Components
const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const CalculatorContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333333;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.p`
  font-size: 1rem;
  color: #555555;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`;

const Output = styled.div`
  background-color: #e0f7fa;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  color: #00796b;
`;

const StyledButton = styled.button`
  background-color: #00796b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #004d40;
  }
`;
