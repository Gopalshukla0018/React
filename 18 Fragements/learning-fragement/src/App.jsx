import ErrorMessage from "./components/Errormessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/Fooditems";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value.trim();
      if (newFoodItem === "") return;
      event.target.value = "";

      let newItems = [...foodItems, newFoodItem];

      setFoodItems(newItems);
      console.log("food value entered is:" + newFoodItem);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>

        <FoodInput handleKeydown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
