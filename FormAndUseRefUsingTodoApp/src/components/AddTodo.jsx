import { useState, useRef } from "react";
import { BiAddToQueue } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  // const [item, newItem] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleItemChange = (event) => {
  //   newItem(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const item = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    onNewItem(item, dueDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";

    // newItem("");
    // setDueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row item-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={item}
            // onChange={handleItemChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success buttons">
            <BiAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
