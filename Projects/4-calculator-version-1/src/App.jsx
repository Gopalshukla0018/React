import styles from "./App.module.css";
import "./App.css";
import Display from "./componants/Display";
import ButtonsContainer from "./componants/ButtonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display/>
      <ButtonsContainer/>
    </div>
  );
}

export default App;
