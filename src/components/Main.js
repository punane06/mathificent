import React from "react";
import SelectInput from "./SelectInput";
import PlayButton from "./PlayButton";

function Main(props) {
  const operations = ["+", "-", "x", "/"];
  const numbers = [];
  for (let number = 2; number <= 100; number++) {
    numbers.push(number);
  }

  return (
    <main>
      <h1>Mathificent</h1>
      <SelectInput
        label="Operation"
        id="operation"
        currentValue={props.operation}
        setCurrentValue={props.setOperation}
        values={operations}
      />
      <SelectInput
        label="Maximum Number"
        id="max-number"
        currentValue={props.maxNumber}
        setCurrentValue={props.setMaxNumber}
        values={numbers}
      />
      <PlayButton />
    </main>
  );
}

export default Main;
