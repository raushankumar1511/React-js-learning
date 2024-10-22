import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";

const WelcomeMessege = () => {
  const contextObj = useContext(todoItemsContext);
  const todoItems = contextObj.todoItems;
  return todoItems.length === 0 && <p className="welcome">Enjoy you day</p>;
};
export default WelcomeMessege;
