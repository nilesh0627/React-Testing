import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const btnText = bgColor === "red" ? "Blue" : "Red";
  const toggleColor = () => {
    setBgColor((color) => {
      if (color === "red") return "blue";
      return "red";
    });
  };

  const handleButton = (e) => {
    setDisabled(e.target.checked);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: disabled ? "gray" : bgColor }}
        onClick={toggleColor}
        disabled={disabled}
      >
        Change to {btnText}
      </button>
      <br />
      <input
        type="checkbox"
        name="checkbtn"
        id="checkbtn"
        onChange={(e) => handleButton(e)}
      />
    </div>
  );
}

export default App;
