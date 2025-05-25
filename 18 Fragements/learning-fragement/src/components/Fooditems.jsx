import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let OnBuyButton = (item,event) => {
    let newtem = [...activeItems ,item];
    setActiveItems(newtem);
    console.log(`${items} clicked`);
    
  };

  return (
    <ul className="list-group  ">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => {
            OnBuyButton(item, event);
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
