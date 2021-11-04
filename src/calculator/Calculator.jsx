import Buttons from "./Buttons";
import "./Calculator.css";

let result = 0;

function Calculator() {
  return (
    // screen
    <div className="wrapper">
      <div className="screen">result: {result}</div>
      {/* button box */}
      <div className="button-box">
        <Buttons />
      </div>
    </div>
  );
}

export default Calculator;
