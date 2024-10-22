import { createContext } from "react";
import { useReducer } from "react";

export const todoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

//defining the reducer function
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item, i) => i !== action.payload.index
    );
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  //using useReducer hook
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    //defining action to add todo item
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (index) => {
    //defining action to delete todo item
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        index,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <todoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </todoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
