import { useEffect, useState } from 'react';
import Button from './Button';
import './Calculator.css';

function Calculator() {
  // 버튼 생성 할 배열
  const buttons = [
    'AC',
    '+/-',
    '/',
    '7',
    '8',
    '9',
    'X',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  // 입력한 값
  let [prevInputValue, setPrevInputValue] = useState(0);

  // 상단에 표시 할 누적 입력 값
  let [accumulatedInput, setAccumulatedInput] = useState(0);

  const resetClickHandler = (event) => {
    console.log(event.target.innerHTML, 'clicked!');
    setAccumulatedInput((accumulatedInput = 0));
    setPrevInputValue((prevInputValue = 0));
  };

  const invertClickHandler = (event) => {
    console.log(event.target.innerHTML, 'clicked!');
    setPrevInputValue(
      prevInputValue.toString().includes('-')
        ? (prevInputValue = prevInputValue.toString().replace('-', ''))
        : prevInputValue === 0
        ? (prevInputValue = 0)
        : (prevInputValue = `-${prevInputValue}`),
    );
  };

  useEffect(() => {
    console.log('useEffect', prevInputValue.toString());
  }, [prevInputValue]);

  const equalsClickHandler = (event) => {
    console.log(event.target.innerHTML, 'clicked!');
  };

  const signClickHandler = (event) => {
    const keyValue = event.target.innerHTML;
    const newAccumulatedValue = prevInputValue.toString().includes('-')
      ? `(${prevInputValue})${keyValue}`
      : prevInputValue + keyValue;
    setAccumulatedInput(
      accumulatedInput === 0
        ? (accumulatedInput = newAccumulatedValue)
        : (accumulatedInput += newAccumulatedValue),
    );
    setPrevInputValue((prevInputValue = 0));
  };

  const comaClickHandler = (event) => {
    console.log(event.target.innerHTML, 'clicked!');
    setPrevInputValue(
      prevInputValue === 0
        ? (prevInputValue = '0.')
        : prevInputValue.toString().includes('.')
        ? (prevInputValue = prevInputValue)
        : (prevInputValue = `${prevInputValue}.`),
    );
  };

  const numClickHandler = (event) => {
    const value = event.target.innerHTML;
    setPrevInputValue(
      prevInputValue === 0 && accumulatedInput === 0 && value !== '0'
        ? (prevInputValue = value)
        : prevInputValue === 0 && accumulatedInput !== 0
        ? (prevInputValue = value)
        : prevInputValue === 0 && value === '0'
        ? (prevInputValue = 0)
        : (prevInputValue += value),
    );
  };

  return (
    // screen
    <div className="wrapper">
      <div className="screen">
        <div className="prevCalculate">{accumulatedInput}</div>
        <div className="inputValue">{prevInputValue}</div>
      </div>
      {/* button box */}
      <div className="button-box">
        <div className="button">
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                className={
                  button === 'AC'
                    ? 'reset'
                    : button === '0'
                    ? 'zero'
                    : button === '.'
                    ? 'point'
                    : button === '='
                    ? 'equal'
                    : ''
                }
                onClick={
                  button === 'AC'
                    ? resetClickHandler
                    : button === '+/-'
                    ? invertClickHandler
                    : button === '='
                    ? equalsClickHandler
                    : button === '/' || button === 'X' || button === '-' || button === '+'
                    ? signClickHandler
                    : button === '.'
                    ? comaClickHandler
                    : numClickHandler
                }
                value={button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
