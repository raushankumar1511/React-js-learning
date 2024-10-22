import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";

function TodoItem({ index, todoName, todoDate }) {
  const { deleteItem } = useContext(todoItemsContext);
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger buttons"
            onClick={() => deleteItem(index)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
