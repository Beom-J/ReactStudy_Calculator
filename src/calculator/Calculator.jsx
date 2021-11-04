import { useState } from "react";
import Buttons from "./Buttons";
import "./Calculator.css";

function Calculator() {
  let [inputValue, setinputValue] = useState(0);
  let [
    toBeCalculated = {
      operator: "",
      value: 0,
    },
    setToBeCalculated,
  ] = useState(0);

  const handleClick = (button) => {
    if (button.type === "operator") {
      setToBeCalculated({ operator: button.value, value: Number(inputValue) });
      setinputValue((inputValue = 0));
      console.log(toBeCalculated);
    }
    if (button.type === "number") {
      setinputValue((inputValue += button.value));
    }
    if (button.type === "equal") {
      // 계산
      console.log("equal", inputValue);
      const result = calculte(inputValue);
      setinputValue((inputValue = result));
    }
    if (button.type === "reset") {
      toBeCalculated = { perator: "", value: 0 };
      setinputValue((inputValue = 0));
    }
  };

  function calculte(value) {
    let result = 0;
    console.log("calculate", toBeCalculated.operator);

    switch (toBeCalculated.operator) {
      case "+/-":
        break;
      case "%":
        result = Number(toBeCalculated.value) % Number(value);
        break;
      case "/":
        result = Number(toBeCalculated.value) / Number(value);
        break;
      case "X":
        result = Number(toBeCalculated.value) * Number(value);
        break;
      case "-":
        result = Number(toBeCalculated.value) - Number(value);
        break;
      case "+":
        result = toBeCalculated.value + Number(value);
        break;
    }

    return result;
  }

  return (
    // screen
    <div className="wrapper">
      <div className="screen">{inputValue}</div>
      {/* button box */}
      <div className="button-box">
        <Buttons click={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
