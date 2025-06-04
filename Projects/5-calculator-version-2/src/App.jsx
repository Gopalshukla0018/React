import styles from "./App.module.css";
import "./App.css";
import Display from "./componants/Display";
import ButtonsContainer from "./componants/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
