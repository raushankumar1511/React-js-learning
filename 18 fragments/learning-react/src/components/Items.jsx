import styles from "./Items.module.css";

const Item = ({ foodItem, bought, buyItem }) => {
  return (
    <li
      className={`${styles["rk-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["rk-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info
      `}
        onClick={buyItem}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
