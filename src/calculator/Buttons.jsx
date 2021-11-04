import "./Buttons.css";

function clickButton(event) {
  console.log("click!: ", event.target.innerHTML);
}

function Buttons() {
  return (
    <div className="button">
      <button id="AC" onClick={clickButton}>
        AC
      </button>
      <button onClick={clickButton}>+/-</button>
      <button onClick={clickButton}>%</button>
      <button onClick={clickButton}>/</button>
      <button onClick={clickButton}>7</button>
      <button onClick={clickButton}>8</button>
      <button onClick={clickButton}>9</button>
      <button onClick={clickButton}>X</button>
      <button onClick={clickButton}>4</button>
      <button onClick={clickButton}>5</button>
      <button onClick={clickButton}>6</button>
      <button onClick={clickButton}>-</button>
      <button onClick={clickButton}>1</button>
      <button onClick={clickButton}>2</button>
      <button onClick={clickButton}>3</button>
      <button onClick={clickButton}>+</button>
      <button id="zero" onClick={clickButton}>
        0
      </button>
      <button id="point" onClick={clickButton}>
        .
      </button>
      <button onClick={clickButton}>=</button>
    </div>
  );
}

export default Buttons;
