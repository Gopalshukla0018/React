import ErrorMesage from "./components/Errormessage";
import FoodItems from "./components/Fooditems";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Daal", "ghee", "green veg", "Roti", "Chana", "peanut"];
  return (
    <>
      <h1>Healthy food</h1>

      <ErrorMesage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
