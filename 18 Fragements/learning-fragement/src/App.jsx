

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "ghee", "green veg", "Roti", "Chana", "peanut"];
  return (
    <>
      <h1>Healthy food</h1>
      {foodItems.length === 0 && <h3>i am still hungry bro </h3>}
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))} 
      </ul>
    </>
  );
}

export default App;
