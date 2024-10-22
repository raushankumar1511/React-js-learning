import { useContext } from "react";
import { todoItemsContext } from "../store/todo-items-store";
import { useState, useRef } from "react";
import { BiAddToQueue } from "react-icons/bi";

function AddTodo() {
  const { addNewItem } = useContext(todoItemsContext);
  const [item, newItem] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleItemChange = (event) => {
    newItem(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    addNewItem(item, dueDate);
    newItem("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row item-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={item}
            onChange={handleItemChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success buttons"
            onClick={handleAddButtonClicked}
          >
            <BiAddToQueue />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
