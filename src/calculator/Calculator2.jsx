import { useState } from "react";
import Buttons from "./Buttons";
import "./Calculator.css";

function Calculator() {
  // 입력한 값
  let [prevInputValue, setPrevInputValue] = useState(0);

  // 상단에 표시 할 누적 입력 값
  let [accumulatedInput, setAccumulatedInput] = useState(0);

  // 버튼 종류에 따른 클릭 이벤트 처리 함수
  function handleClick(button) {
    // 숫자 버튼 누를때마다 누적
    if (button.type === "number" && accumulatedInput === 0) {
      setPrevInputValue(
        prevInputValue === 0
          ? (prevInputValue = button.value)
          : (prevInputValue += button.value)
      );
    }

    // 연산자 누른 후 숫자 버튼 누를 때
    if (button.type === "number" && accumulatedInput !== ("" || 0)) {
      setPrevInputValue(
        prevInputValue === (0 || "")
          ? (prevInputValue += button.value)
          : (prevInputValue = button.value)
      );
    }

    // 연산자 버튼 누르면 상단에 값 표시
    if (button.type === "operator") {
      console.log("operator value:: ", button.value);
      const accumulatedValue = prevInputValue + button.value;
      setAccumulatedInput(
        accumulatedInput === 0
          ? (accumulatedInput = accumulatedValue)
          : (accumulatedInput += accumulatedValue)
      );
    }

    // AC 누르면 리셋
    if (button.type === "reset") {
      setAccumulatedInput((accumulatedInput = ""));
      setPrevInputValue((prevInputValue = 0));
    }
  }

  return (
    // screen
    <div className="wrapper">
      <div className="screen">
        <div className="prevCalculate">{accumulatedInput}</div>
        <div className="inputValue">{prevInputValue}</div>
      </div>
      {/* button box */}
      <div className="button-box">
        <Buttons click={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
