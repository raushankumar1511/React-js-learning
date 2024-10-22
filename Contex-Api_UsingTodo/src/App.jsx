import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessege from "./components/WelcomeMessege";
import { todoItemsContext } from "./store/todo-items-store";
// import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    //spread operator
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (index) => {
    const newTodoItems = todoItems.filter((item, i) => i !== index);
    setTodoItems(newTodoItems);
  };

  return (
    <todoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo />
        <WelcomeMessege></WelcomeMessege>
        <TodoItems></TodoItems>
      </center>
    </todoItemsContext.Provider>
  );
}

export default App;
