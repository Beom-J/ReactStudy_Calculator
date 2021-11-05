import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import "./Calculator.css";

function Calculator() {
  // 현재 입력한 값
  let [inputValue, setinputValue] = useState(0);

  // 이전에 입력한 값 & 연산자
  let [
    toBeCalculated = {
      operator: "",
      value: 0,
    },
    setToBeCalculated,
  ] = useState(0);

  // 버튼에서 넘어온 버튼 정보
  const handleClick = (button) => {
    // 연산자일때
    if (button.type === "operator") {
      console.log("prevInputValue: ", inputValue);
      setToBeCalculated({ operator: button.value, value: Number(inputValue) });
      setinputValue((inputValue = 0));
    }

    // 숫자일때
    if (button.type === "number") {
      setinputValue((inputValue += button.value));
    }

    // 최종 계산
    if (button.type === "equal") {
      console.log("equal", inputValue);
      const result = calculte(inputValue);
      setToBeCalculated({ operator: "", value: 0 });
      setinputValue((inputValue = result));
    }

    // 리셋할 때
    if (button.type === "reset") {
      setinputValue((inputValue = 0));
      setToBeCalculated({ operator: "", value: 0 });
    }
  };

  // 계산 처리 함수
  function calculte(value) {
    // 계산 결과 값
    let result = 0;

    // 연산자에 따른 계산
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
      <div className="screen">
        <div className="prevCalculate">
          {toBeCalculated.value} {toBeCalculated.operator}
        </div>
        <div className="inputValue">{inputValue}</div>
      </div>
      {/* button box */}
      <div className="button-box">
        <Buttons click={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
