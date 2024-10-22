import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const privacy = useSelector((store) => store.privacy);

  const inputValue = useRef();

  const handleIncreament = () => {
    !privacy && dispatch({ type: "INCREAMENT" });
  };

  const handleDecreament = () => {
    !privacy && dispatch({ type: "DECREAMENT" });
  };

  const handleAddSub = (type) => {
    !privacy &&
      dispatch({
        type: type,
        paylod: parseInt(inputValue.current.value),
      });
    inputValue.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "TOGGLE_PRIVACY" });
  };

  const handleReset = () => {
    !privacy && dispatch({ type: "RESET" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary button"
          onClick={handleDecreament}
        >
          Decreament -1
        </button>
        <button
          type="button"
          className="btn btn-success button"
          onClick={handleIncreament}
        >
          Increament +1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter no"
          ref={inputValue}
          className="number-input"
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            handleAddSub("ADD");
          }}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handleAddSub("SUBTRACT");
          }}
        >
          Subtract
        </button>
      </div>
      <div className="d-grid gap-4 d-sm-flex justify-content-sm-center privacy">
        <button type="button" className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePrivacyToggle}
        >
          Privacy
        </button>
      </div>
    </>
  );
};

export default Controls;
