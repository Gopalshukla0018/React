import ErrorMesage from "./components/Errormessage";
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

      <ErrorMesage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
    <Container>
      <p>Abve is the list o healthy food that are good fr your health</p>
    </Container>
    </>
  );
}

export default App;
