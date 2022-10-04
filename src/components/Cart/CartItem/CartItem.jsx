import styles from "./CartItem.module.scss";

const CartItem = (props) => {
  const priceItem = `$${parseFloat(props.price).toFixed(2)}/item`;

  return (
    <li className={styles["cart-item"]}>
      <div className={styles["item-info"]}>
        <h3 className={styles.name}>{props.name}</h3>
        <span className={styles["price-item"]}>{priceItem}</span>
        <span className={styles.amount}>x {props.amount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
