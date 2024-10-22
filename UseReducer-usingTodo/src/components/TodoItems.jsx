import { useContext } from "react";
import TodoItem from "./Todoitem";
import { todoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { todoItems } = useContext(todoItemsContext);

  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
