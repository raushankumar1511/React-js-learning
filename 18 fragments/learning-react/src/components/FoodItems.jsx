import { useState } from "react";
import Item from "./Items";
const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onClick = (event, index) => {
    if (!activeItems.includes(index)) {
      let newItems = [...activeItems, index];
      setActiveItems(newItems);
    }
  };
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        //passing the value via props
        <Item
          key={index}
          foodItem={item}
          bought={activeItems.includes(index)}
          buyItem={(event) => onClick(event, index)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
