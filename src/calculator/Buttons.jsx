import "./Buttons.css";

function Buttons(props) {
  const value = (event) => {
    // Calculator 컴포넌트에 버튼 값 넘겨주기
    const button = {
      type: event.target.className,
      value: event.target.innerHTML,
    };

    props.click(button);
  };

  return (
    <div className="button">
      <button className="reset" id="AC" onClick={value}>
        AC
      </button>
      <button className="operator" onClick={value}>
        +/-
      </button>
      <button className="operator" onClick={value}>
        %
      </button>
      <button className="operator" onClick={value}>
        /
      </button>
      <button className="number" onClick={value}>
        7
      </button>
      <button className="number" onClick={value}>
        8
      </button>
      <button className="number" onClick={value}>
        9
      </button>
      <button className="operator" onClick={value}>
        X
      </button>
      <button className="number" onClick={value}>
        4
      </button>
      <button className="number" onClick={value}>
        5
      </button>
      <button className="number" onClick={value}>
        6
      </button>
      <button className="operator" onClick={value}>
        -
      </button>
      <button className="number" onClick={value}>
        1
      </button>
      <button className="number" onClick={value}>
        2
      </button>
      <button className="number" onClick={value}>
        3
      </button>
      <button className="operator" onClick={value}>
        +
      </button>
      <button className="number" id="zero" onClick={value}>
        0
      </button>
      <button className="number" id="point" onClick={value}>
        .
      </button>
      <button className="equal" onClick={value}>
        =
      </button>
    </div>
  );
}

export default Buttons;
