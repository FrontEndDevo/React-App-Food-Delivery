import styles from './CartItem.module.scss';

const CartItem = props => {

  const priceItem = `$${props.price}/item`;

  return (
    <li className={styles["cart-item"]}>
      <div className={styles["item-info"]}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.type}>{props.type}</span>
        <span className={styles["price-item"]}>{priceItem}</span>
      </div>
      <div className={styles.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
}

export default CartItem;