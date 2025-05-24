import ErrorMessage from "./components/Errormessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/Fooditems";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Daal", "ghee", "green veg", "Roti", "Chana", "peanut"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
            <ErrorMessage items={foodItems} />
            <FoodInput></FoodInput>
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>Abve is the list o healthy food that are good fr your health</p>
      </Container> */}
    </>
  );
}

export default App;
