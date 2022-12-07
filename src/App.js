import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("red");
  const [disableBut, setDisableBut] = useState(false);

  const newButtonColor = color === "red" ? "blue" : "red";
  const btnHandler = () => {
    setColor((prev) => newButtonColor);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: disableBut ? "gray" : color }}
        disabled={disableBut}
        onClick={btnHandler}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disableBut}
        onChange={() => setDisableBut((prev) => !prev)}
      />
      <label id="disable-button-checkbox" htmlFor="disable-button-checkbox">
        Disable button
      </label>
    </div>
  );
}

export default App;
