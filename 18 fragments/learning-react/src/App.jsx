import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Roti", "Sabzi", "Dal", "Rice", "Salad"];

  // let [textToShow, setTextState] = useState("Food item entered by user ");
  let [foodItems, setFoodItems] = useState([
    "salad",
    "green Vegetables",
    "roti",
  ]);
  const onKeyDown = (event) => {
    if (event.key == "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1>Healthy food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is the list of healthy food items that is good for health</p>
      </Container>
    </>
  );
}

export default App;
