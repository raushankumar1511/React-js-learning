import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        className={styles.foodInput}
        type="text"
        id="food"
        name="food"
        placeholder="Enter Food Item here"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default FoodInput;
