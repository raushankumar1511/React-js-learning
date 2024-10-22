import { AiOutlineDelete } from "react-icons/ai";

function TodoItem({ index, todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger buttons"
            onClick={() => onDeleteClick(index)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
