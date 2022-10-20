import { useContext, useEffect, useState } from "react";
import styles from "./CartBtn.module.scss";
import Icon from "../../../assets/Images/delivery.png";
import FoodContext from "../../../store/food-context";

const CartBtn = (props) => {
  const [isItemAdded, setIsItemAdded] = useState(false);

  const ctx = useContext(FoodContext);
  const { items } = ctx;

  let totalItems = 0;
  for (let i = 0; i < items.length; i++) {
    totalItems += items[i].amount;
  }

  const btnClasses = `${styles.cart} ${isItemAdded ? styles.bump : ""}`;

  // // Check the length of items  for add pump class to the cart:
  useEffect(() => {
    if (items.length === 0) return;

    setIsItemAdded(true);

    const timer = setTimeout(() => {
      setIsItemAdded(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClickCart}>
      <img src={Icon} alt="delivery-icon" />
      <h3>Cart</h3>
      <span>{totalItems}</span>
    </button>
  );
};

export default CartBtn;
